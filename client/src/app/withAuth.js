"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { tokenSelector } from "./redux/sessionReducer";
import { userSelector } from "./redux/sessionReducer";

const router = () => {};

const withAuth = (Component) => {
  return (props) => {
    const dispatch = useDispatch();
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();

    useEffect(() => {
      if (!isAuth) {
        router.push("/signin", undefined, { shallow: true });
      }
    }, [isAuth]);

    return <Component {...props} />;
  };
};

export default withAuth;
