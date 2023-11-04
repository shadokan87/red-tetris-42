"use client";
import "./globals.css";
import { WithRedux } from "./redux/WithRedux";
import Navbar from "./nav";
import { NavItem } from "./nav";
import { useSelector } from "react-redux";
import { roomSelector } from "./redux/lobbyReducer";
import { useRoomMembers } from "./page";
import { useState, useMemo } from "react";

const RenderNavBar = () => {
  const room = useSelector(roomSelector);
  const [owner, opponent] = useRoomMembers(room);
  const navItems = useMemo(() => {
    const RoomPathname =
      room && owner ? `/#${room.name}[${owner.displayname}]` : "/404";
    return [
      { label: "Room", pathname: RoomPathname, disabled: room == null },
      { label: "Lobby", pathname: "/lobby" },
    ];
  }, [room, owner]);

  return <Navbar navItems={navItems}></Navbar>;
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
