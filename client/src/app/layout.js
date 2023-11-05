"use client";
import "./globals.css";
import { WithRedux } from "./redux/WithRedux";
import Navbar from "./nav";
import { NavItem } from "./nav";
import { useSelector } from "react-redux";
import { roomSelector } from "./redux/lobbyReducer";
import { useRoomMembers } from "./page";
import { useState, useMemo, use } from "react";
import { Typography, Dropdown } from "antd";
import { userSelector } from "./redux/sessionReducer";

const RenderNavBar = () => {
  const room = useSelector(roomSelector);
  const user = useSelector(userSelector);
  const [owner, opponent] = useRoomMembers(room);

  const navItems = useMemo(() => {
    const RoomPathname =
      room && owner ? `/#${room.name}[${owner.displayname}]` : "/404";
    return [
      { label: "Room", pathname: RoomPathname, disabled: room == null },
      { label: "Lobby", pathname: "/lobby" },
    ];
  }, [room, owner]);

  const userDropdown = () => {
    const items = useMemo(() => {
      return [
        {
          key: "1",
          danger: true,
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Sign Out
            </a>
          ),
        },
      ];
    }, [user]);
    if (!user) return <></>;
    return (
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>{user.displayname}</a>
      </Dropdown>
    );
  };

  return <Navbar navItems={navItems} rhs={userDropdown}></Navbar>;
};

export default function rootlayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WithRedux>
          <RenderNavBar />
          {children}
        </WithRedux>
      </body>
    </html>
  );
}
