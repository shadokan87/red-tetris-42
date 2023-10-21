"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = () => {};

const withAuth = (Component) => {
  return (props) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      if (!isAuth) {
        console.warn("not auth");
      }
    }, [isAuth]);

    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };
};

export default withAuth;
