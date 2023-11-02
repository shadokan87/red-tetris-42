"use client";
import { useRouter } from "next/navigation";
import { useEffect, useReducer, useState } from "react";
import withAuth from "./withAuth";
import { useAxios } from "./contexts/axios";
import { useDispatch, useSelector } from "react-redux";
import { roomSelector, setRoom } from "./redux/lobbyReducer";
import { Typography, Flex, Divider } from "antd";
import Link from "next/link";
import "./root.css";
import { userSelector } from "./redux/sessionReducer";

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
    const response = await _axios.get(`/user/${id}`);
    console.log("!fetch result", response);
    return response.data;
  } catch (e) {
    // TODO: handle error
  }
};

const useRoomMembers = (room) => {
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

const UserLink = ({ user }) => {
  console.log("!user is: ", user);
  return (
    <>
      <Flex gap={"0.5em"}>
        <Link href="/404" className="userLink">
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
      <UserLink user={member}></UserLink>
      {ownerActions}
    </div>
  );
};

const RenderRoomMembers = ({ room, owner, opponent, ownerActions }) => {
  const user = useSelector(userSelector);
  const isOwner = user.id == owner;
  return (
    <>
      <Flex vertical className="membersWrapper">
        <OneMember room={room} member={owner} />
        <Divider>{"VS"}</Divider>
        {(opponent && (
          <OneMember
            room={room}
            member={opponent}
            ownerActions={isOwner ? ownerActions : undefined}
          />
        )) || <Typography>{"Waiting for opponent"}</Typography>}
      </Flex>
    </>
  );
};

function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const room = useSelector(roomSelector);
  const { axiosReady, axiosInstance } = useAxios();
  const [owner, opponent] = useRoomMembers(room);

  // useEffect(() => {
  //   console.log("Owner:", owner);
  //   console.log("Opponent:", opponent);
  // }, [owner, opponent]);

  const handleKickOpponent = async () => {
    console.log("kick user: " + opponent.displayname);
  };

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
              console.log("error here", e);
            });
        })();
        // joinRoom(urlFormat);
      } catch (e) {}
    } else {
      router.push("/404", undefined, { shallow: true });
    }
  }, [window.location, axiosReady]);

  const ownerActions = () => (
    <Button onClick={async () => await handleKickOpponent()}></Button>
  );

  if (room && owner)
    return (
      <main className="main">
        <RenderRoomMembers
          room={room}
          owner={owner}
          opponent={opponent}
          onerActions={ownerActions}
        />
      </main>
    );
  return <main>{"...veryfing room"}</main>;
}

export default withAuth(Home);
