"use client";
import { useEffect } from "react";
import withAuth from "../withAuth";
import { useSelector } from "react-redux";
import { tokenSelector, userSelector } from "../redux/sessionReducer";

function Lobby() {
  const user = useSelector(userSelector);
  if (!user) return <></>;
  return (
    <main>
      <h1>{user.username}</h1>
    </main>
  );
}

export default withAuth(Lobby);
