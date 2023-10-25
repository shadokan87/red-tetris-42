"use client";
import { useDispatch, useSelector } from "react-redux";
import { axiosConfigSelector, tokenSelector } from "../redux/sessionReducer";
import { userSelector } from "../redux/sessionReducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Flex, Input, Typography, Button, Form } from "antd";
import { setToken } from "../redux/sessionReducer";
import { setUser } from "../redux/sessionReducer";
import "./signin.module.css";
import { useRouter } from "next/navigation";

const SIGNIN_URL = "http://localhost:3000/auth/signin";

export default function Signin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector(tokenSelector);
  const axiosConfig = useSelector(axiosConfigSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!axiosConfig) return;
    const axiosInstance = axios.create(axiosConfig);
    (async () => {
      await axiosInstance.get("/auth/verifyToken").catch((e) => {
        alert("Token invalid");
      });
      const user = await axiosInstance
        .get("/auth/user")
        .then(({ data }) => data)
        .catch((e) => {
          alert("failed to get user");
        });
      dispatch(setUser(user));
      router.push("/lobby", undefined, { shallow: true });
    })();
  }, [axiosConfig]);

  const onFinish = (values) => {
    (async () => {
      setIsLoading(true);
      await axios
        .post(SIGNIN_URL, values)
        .then((response) => {
          dispatch(setToken(response.data["access-token"]));
          console.log("login response", response);
        })
        .catch((e) => {
          console.log("error login", e);
        });
      setIsLoading(false);
    })();
  };

  return (
    <main className={"landing"}>
      <div></div>
      <Form onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true }]}>
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={isLoading == true}>
            <Typography>{"Signin"}</Typography>
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}
