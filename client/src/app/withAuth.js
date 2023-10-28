"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { tokenSelector } from "./redux/sessionReducer";
import { userSelector } from "./redux/sessionReducer";
import { setToken } from "./redux/sessionReducer";
import { fetchAuthUser } from "./redux/sessionReducer";
import Cookies from "js-cookie";

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
        const tokenFromCookie = Cookies.get("token");
        if (tokenFromCookie) {
          dispatch(
            setToken({
              token: tokenFromCookie,
              remember: false,
            })
          );
          dispatch(fetchAuthUser());
        } else if (router.pathname !== "/signin") {
          router.push("/signin", undefined, { shallow: true });
        }
      } else {
        switch (router.pathname) {
          case "/":
          case "/lobby":
            break;
          default:
            // router.push("/lobby", undefined, { shallow: true });
            break;
        }
      }
    }, [isAuth, dispatch]);

    return <Component {...props} />;
  };
};

export default withAuth;
