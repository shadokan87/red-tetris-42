"use client";
import { useContext, useEffect, useMemo, useState } from "react";
import withAuth from "../withAuth";
import { useSelector } from "react-redux";
import {
  axiosConfigSelector,
  tokenSelector,
  userSelector,
} from "../redux/sessionReducer";
import { Button, Modal, Typography, Flex } from "antd";
import { useAxiosInstance } from "../hooks/axiosInstance";
import { useAxios } from "../contexts/axios";
import { message } from "antd";
import axios from "axios";

import { Form, Input, Checkbox } from "antd";

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
      </Form>
    </Modal>
  );
};

function Lobby() {
  const { axiosReady, axiosInstance } = useAxios();
  const axiosConfig = useSelector(axiosConfigSelector);
  const user = useSelector(userSelector);
  const [createRoom, setCreateRoom] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleCancel = () => {
    setCreateRoom((prev) => !prev);
  };
  const handleCreateRoom = async (values) => {
    try {
      console.log("!values", values);
      const instance = axios.create(axiosConfig);
      console.log("!instance test", axiosConfig);
      const response = await instance.post("/game/room/create", values);
      messageApi.success("Room created successfully");
    } catch (error) {
      console.error(error);
      messageApi.error("Failed to create room");
    }
    setCreateRoom((prev) => !prev);
  };

  // useEffect(() => {
  //   if (!axiosReady) console.warn("axios not ready");
  //   else console.log("axios is ready");
  // }, [axiosReady]);

  if (!user || !axiosReady) return <></>;
  return (
    <main>
      {contextHolder}
      <h1>{user.username}</h1>
      <CreateRoomModal
        open={createRoom}
        onCancel={handleCancel}
        onCreate={handleCreateRoom}
      />
      <Button type={"primary"} onClick={() => setCreateRoom(true)}>
        {"Create room"}
      </Button>
    </main>
  );
}

export default withAuth(Lobby);
