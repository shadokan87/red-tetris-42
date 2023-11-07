"use client";
import { useRouter } from "next/navigation";
import { useEffect, useReducer, useState, useRef } from "react";
import withAuth from "./withAuth";
import { useAxios } from "./contexts/axios";
import { useDispatch, useSelector } from "react-redux";
import { roomSelector, setRoom } from "./redux/lobbyReducer";
import { Typography, Flex, Divider, Button, Popover, message } from "antd";
import Link from "next/link";
import "./root.css";
import { userSelector } from "./redux/sessionReducer";
import { Mutex } from "./utils";
import { redirectToTetris } from "./utils";

const parseRoomUrl = (url) => {
  const trimmedUrl = url.split("/")[0];
  const regex = /#(\w+)\[(\w+)\]/;
  const match = trimmedUrl.match(regex);
  if (match) {
    return { name: match[1], displayName: match[2] };
  }
  return null;
};

const fetchUserById = async (_axios, id) => {
  try {
    if (!id) return undefined;
    const response = await _axios.get(`/user/${id}`);
    console.log("!fetch result", response);
    return response.data;
  } catch (e) {
    // TODO: handle error
  }
};

export const useRoomMembers = (room) => {
  const { axiosReady, axiosInstance } = useAxios();
  const [owner, setOwner] = useState(null);
  const [opponent, setOpponent] = useState(null);

  useEffect(() => {
    if (!axiosReady || !room) return;
    Promise.all([
      fetchUserById(axiosInstance, room.owner),
      fetchUserById(axiosInstance, room.opponent),
    ]).then(([ownerUser, opponentUser]) => {
      setOwner(ownerUser);
      setOpponent(opponentUser);
    });
  }, [room, axiosReady]);
  return [owner, opponent];
};

export const UserLink = ({ user }) => {
  return (
    <>
      <Flex gap={"0.5em"}>
        <Link href={`/profile/${user.username}`} className="userLink">
          <Typography>{user.displayname}</Typography>
        </Link>
        <Typography>{user.username}</Typography>
      </Flex>
    </>
  );
};

const OneMember = ({ room, member, ownerActions }) => {
  return (
    <div className="oneMember">
      <Flex gap={"0.5em"}>
        <UserLink user={member}></UserLink>
        {ownerActions}
      </Flex>
    </div>
  );
};

const RenderRoomMembers = ({ room, owner, opponent, ownerActions }) => {
  const user = useSelector(userSelector);
  const isOwner = user.id == owner.id;
  return (
    <>
      <Flex vertical className="membersWrapper">
        <OneMember room={room} member={owner} />
        {!room.solo && (
          <>
            <Divider>{"VS"}</Divider>
            {opponent ? (
              <OneMember
                room={room}
                member={opponent}
                ownerActions={isOwner ? ownerActions() : undefined}
              />
            ) : (
              <Typography>{"Waiting for opponent"}</Typography>
            )}
          </>
        )}
      </Flex>
    </>
  );
};

function Home() {
  const router = useRouter();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const room = useSelector(roomSelector);
  const { axiosReady, axiosInstance } = useAxios();
  const [owner, opponent] = useRoomMembers(room);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (!room) return;
    if (room.gameStarted) {
      if (room.owner == user.id) redirectToTetris(router);
      else {
        setTimeout(() => {
          redirectToTetris(router);
        }, 5000);
      }
    }
  }, [room]);

  useEffect(() => {
    if (!axiosReady) return;
    const urlFormat = parseRoomUrl(window.location.hash);
    if (urlFormat) {
      try {
        (async () => {
          await axiosInstance
            .post(`/game/room/join/${urlFormat.displayName}/${urlFormat.name}`)
            .then((res) => {
              dispatch(setRoom(res.data.room));
            })
            .catch((e) => {
              router.push("/404", undefined, { shallow: true });
            });
        })();
      } catch (e) { }
    } else {
      router.push("/404", undefined, { shallow: true });
    }
  }, [window.location, axiosReady]);

  const handleKickOpponent = async () => {
    try {
      await axiosInstance.delete(`/game/room/leave`);
    } catch (error) {
      console.error(error);
    }
  };

  const OwnerActions = () => (
    <Button type="primary" onClick={async () => await handleKickOpponent()}>
      {"kick"}
    </Button>
  );

  const MemberFooterActions = () => {
    const isOwner = user.id == owner.id;
    const [showPopover, setShowPopover] = useState(false);
    const dispatch = useDispatch();

    const handleSetReady = async () => {
      try {
        await axiosInstance.post(`/game/room/status/ready`);
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
    const handleDestroyRoom = async () => {
      try {
        await axiosInstance.delete(`/game/room/delete`);
        router.push("/lobby");
      } catch (error) {
        console.error(error);
      }
    };

    const handleLeaveRoom = async () => {
      try {
        await axiosInstance.delete(`/game/room/leave`);
        router.push("/lobby");
      } catch (error) {
        console.error(error);
      }
    };

    if (isOwner)
      return (
        <Flex vertical gap={"0.5em"}>
          <Popover
            content="Opponent not ready"
            trigger="hover"
            open={!room.solo && !room.opponentReady && showPopover}
          >
            <Button
              type={room.solo || room.opponentReady ? "primary" : "default"}
              className={"primaryAction"}
              onClick={async () => {
                if (room.opponentReady || room.solo) await handleStartGame();
              }}
              onMouseEnter={() => setShowPopover(true)}
              onMouseLeave={() => setShowPopover(false)}
            >
              {"Start game"}
            </Button>
          </Popover>
          <Button
            type={"primary"}
            className={"primaryAction"}
            danger
            onClick={async () => await handleDestroyRoom()}
          >
            {"Destroy room"}
          </Button>
        </Flex>
      );
    else if (!room.opponentReady)
      return (
        <Flex vertical gap={"0.5em"}>
          <Button
            type={"primary"}
            className={"primaryAction"}
            onClick={async () => await handleSetReady()}
          >
            {"I am ready"}
          </Button>
          <Button
            type={"primary"}
            className={"primaryAction"}
            danger
            onClick={async () => await handleLeaveRoom()}
          >
            {"Leave room"}
          </Button>
        </Flex>

      );
    else
      return (
        <Flex vertical gap={"0.5em"}>
          <Button
            type={"default"}
            className={"primaryAction"}
            onClick={async () => await handleSetReady()}
          >
            {"I am not ready"}
          </Button>
          <Button
            type={"primary"}
            className={"primaryAction"}
            danger
            onClick={async () => await handleLeaveRoom()}
          >
            {"Leave room"}
          </Button>
        </Flex>
      );
  };

  if (room && owner)
    return (
      <>
        {contextHolder}
        <main className="main">
          <Flex vertical gap={"0.5em"}>
            <RenderRoomMembers
              room={room}
              owner={owner}
              opponent={opponent}
              ownerActions={OwnerActions}
            />
            <MemberFooterActions />
          </Flex>
        </main>
      </>
    );
  return <main>{"...veryfing room"}</main>;
}

export default withAuth(Home);
