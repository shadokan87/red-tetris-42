"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  axiosConfigSelector,
  fetchAuthUser,
  tokenSelector,
} from "../redux/sessionReducer";
import { userSelector } from "../redux/sessionReducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Flex, Input, Typography, Button, Form, Checkbox } from "antd";
import { setToken } from "../redux/sessionReducer";
import { setUser } from "../redux/sessionReducer";
import "./signin.css";
import { useRouter } from "next/navigation";
import withAuth from "../withAuth";

const SIGNIN_URL = "http://localhost:3000/auth/signin";

function Signin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const axiosConfig = useSelector(axiosConfigSelector);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    (async () => {
      setIsLoading(true);
      await axios
        .post(SIGNIN_URL, values)
        .then((response) => {
          dispatch(
            setToken({
              token: response.data["access-token"],
              remember: rememberMe,
            })
          );
          try {
            dispatch(fetchAuthUser());
            router.push("/lobby", undefined, { shallow: true });
          } catch (e) {}
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
        <Checkbox
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        >
          Remember me
        </Checkbox>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={isLoading == true}>
            <Typography>{"Signin"}</Typography>
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}

export default withAuth(Signin);
