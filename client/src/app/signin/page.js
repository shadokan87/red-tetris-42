"use client";
import { useDispatch, useSelector } from "react-redux";
import { tokenSelector } from "../redux/sessionReducer";
import { userSelector } from "../redux/sessionReducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Flex, Input, Typography, Button, Form } from "antd";
import { setToken } from "../redux/sessionReducer";
import "./signin.module.css";

const SIGNIN_URL = "http://localhost:3000/auth/signin";

export default function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("!token", token);
  }, [token]);
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
