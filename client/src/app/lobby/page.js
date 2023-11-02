"use client";
import { useContext, useEffect, useMemo, useState } from "react";
import withAuth from "../withAuth";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../redux/sessionReducer";
import { Button, Modal, Typography, Flex, Table } from "antd";
import { useAxios } from "../contexts/axios";
import { message } from "antd";
import axios from "axios";
import { Form, Input, Checkbox } from "antd";
import { roomSelector, setRoom } from "../redux/lobbyReducer";
import { useRouter } from "next/navigation";

const CreateRoomModal = ({ open, onCancel, onCreate }) => {
  const [form] = Form.useForm();

  const footer = () => (
    <Flex justify="center" align="middle">
      <Button
        type="primary"
        onClick={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        Create
      </Button>
    </Flex>
  );

  return (
    <Modal onCancel={onCancel} footer={footer} open={open}>
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input the name of the room!",
            },
          ]}
        >
          <Input placeholder="Room Name" />
        </Form.Item>
        <Form.Item name="isPublic" valuePropName="checked" initialValue={true}>
          <Checkbox>Public Room</Checkbox>
        </Form.Item>
        <Form.Item name="solo" valuePropName="checked" initialValue={true}>
          <Checkbox>Solo game</Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};

function Lobby() {
  const { axiosReady, axiosInstance } = useAxios();
  const router = useRouter();
  const dispatch = useDispatch();
  const room = useSelector(roomSelector);
  const user = useSelector(userSelector);
  const [createRoom, setCreateRoom] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [publicRooms, setPublicRooms] = useState([]);
  const roomTable = useMemo(() => {
    if (!publicRooms.length) return [];
    return publicRooms.map((r) => {
      if (r.solo) r["members"] = "1/1";
      else if (!("opponent" in r)) r["members"] = "1/2";
      else r["members"] = "2/2";
      return r;
    });
  }, [publicRooms]);

  useEffect(() => {
    if (!room) return;
    if (room.gameStarted) {
      router.push("/tetris", undefined, { shallow: true });
    }
    console.log("new info", room);
  }, [room]);

  useEffect(() => {
    if (!axiosReady) return;
    fetchRooms();
  }, [axiosReady, axiosInstance]);

  const handleCancel = () => {
    setCreateRoom((prev) => !prev);
  };

  const handleCreateRoom = async (values) => {
    try {
      console.log("axios state", axiosInstance);
      const response = await axiosInstance.post("/game/room/create", values);
      dispatch(setRoom(response.data.room));
      // console.log("response", response.data);
      messageApi.success("Room created successfully");
    } catch (error) {
      console.error(error);
      messageApi.error("Failed to create room");
    }
    setCreateRoom((prev) => !prev);
  };

  const joinRoom = async (room) => {
    try {
      const user = await axiosInstance.get(`/user/${room.owner}`);
      router.push(`/#${room.name}[${user.data.displayname}]`, undefined, {
        shallow: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRooms = async () => {
    try {
      const response = await axiosInstance.get("/game/rooms/allPublic");
      setPublicRooms(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStartGame = async () => {
    try {
      const response = await axiosInstance.post("/game/start");
      dispatch(setRoom(response.data.room));
      messageApi.success("Game started successfully");
    } catch (error) {
      console.error(error);
      messageApi.error("Failed to start game");
    }
  };

  if (!user || !axiosReady) return <></>;

  const Actions = () => {
    const canStartAction = (
      <Button type={"primary"} onClick={() => handleStartGame()}>
        {"Start game"}
      </Button>
    );
    const shouldWaitAction = (
      <Button
        type={"dashed"}
        disabled={true}
        onClick={() => setCreateRoom(true)}
      >
        {"Waiting for opponent"}
      </Button>
    );
    if (!room) return <Typography>{"No room"}</Typography>;
    else if (!room.solo) {
      const opponentIsPresent = "opponent" in room;
      if (!opponentIsPresent) return shouldWaitAction;
    }
    return canStartAction;
  };

  const columns = [
    {
      title: "Room Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Members",
      dataIndex: "members",
      key: "members",
    },
  ];

  return (
    <main>
      {contextHolder}
      <h1>{user.username}</h1>
      {(room && JSON.stringify(room)) || <h1>{"no room"}</h1>}
      <CreateRoomModal
        open={createRoom}
        onCancel={handleCancel}
        onCreate={handleCreateRoom}
      />
      <Button type={"primary"} onClick={() => setCreateRoom(true)}>
        {"Create room"}
      </Button>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: async (event) => {
              await joinRoom(record);
            },
          };
        }}
        columns={columns}
        dataSource={roomTable}
      />
      <Actions />
    </main>
  );
}

export default withAuth(Lobby);
