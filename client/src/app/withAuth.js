"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { tokenSelector } from "./redux/sessionReducer";
import { userSelector } from "./redux/sessionReducer";

const router = () => {};

const withAuth = (Component) => {
  return (props) => {
    const dispatch = useDispatch();
    const token = useSelector(tokenSelector);
    const user = useSelector(userSelector);
    const [isAuth, setIsAuth] = useState(user && token);
    const router = useRouter();

    useEffect(() => {
      setIsAuth(user && token);
    }, [token, user]);

    useEffect(() => {
      if (!isAuth) {
        router.push("/signin", undefined, { shallow: true });
      }
    }, [isAuth]);

    return <Component {...props} />;
  };
};

export default withAuth;
