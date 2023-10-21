"use client";
import { useEffect } from "react";
import withAuth from "../withAuth";
import { useSelector } from "react-redux";
import { tokenSelector } from "../redux/sessionReducer";

function Lobby() {
  const token = useSelector(tokenSelector);
  useEffect(() => {
    alert(token);
  }, [token]);
  return (
    <main>
      <h1>{"Lobby page"}</h1>
    </main>
  );
}

export default withAuth(Lobby);
