"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { tokenSelector } from "./redux/sessionReducer";
import { userSelector } from "./redux/sessionReducer";
import { setToken } from "./redux/sessionReducer";
import { fetchAuthUser } from "./redux/sessionReducer";
import Cookies from "js-cookie";
import { roomSelector } from "./redux/lobbyReducer";

const withAuth = (Component) => {
  return (props) => {
    const dispatch = useDispatch();
    const token = useSelector(tokenSelector);
    const user = useSelector(userSelector);
    const room = useSelector(roomSelector);
    const [isAuth, setIsAuth] = useState(user && token);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      setIsAuth(user && token);
    }, [token, user]);

    useEffect(() => {
      if (!isAuth) {
        const tokenFromCookie = Cookies.get("token");
        if (tokenFromCookie) {
          dispatch(
            setToken({
              token: tokenFromCookie,
              remember: false,
            })
          );
          try {
            dispatch(fetchAuthUser());
            switch (pathname) {
              case "/tetris":
                if (!room || !room.gameStarted)
                  router.push("/lobby", undefined, { shallow: true });
                break;
              default:
                break;
            }
          } catch (e) {
            console.error(e);
          }
        } else router.push("/signin", undefined, { shallow: true });
      } else {
      }
    }, [isAuth, dispatch]);

    return <Component {...props} />;
  };
};

export default withAuth;
