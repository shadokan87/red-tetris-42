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

const SIGNIN_URL = "http://localhost:3000/auth/signup";

function Signup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const axiosConfig = useSelector(axiosConfigSelector);
  const dispatch = useDispatch();

  const handleSignup = async (values) => {
    try {
      const response = await axios.post(SIGNIN_URL, values, axiosConfig);
      router.push("/signin", undefined, { shallow: true });
    } catch (error) {
      console.error(error);
    }
  };

  const onFinish = (values) => {
    (async () => {
      await handleSignup(values);
    })();
  };

  return (
    <Flex justify="center" align="center" className="landing">
      <Flex vertical>
        <Flex justify="center">
          <Typography>
            <h1>{"Signup"}</h1>
          </Typography>
        </Flex>
        <Form onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input placeholder="username" />
          </Form.Item>
          <Form.Item name="displayname" rules={[{ required: true }]}>
            <Input placeholder="displayname" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={isLoading == true}
            >
              <Typography>{"Signin"}</Typography>
            </Button>
          </Form.Item>
        </Form>
        <Button
          type={"link"}
          onClick={() => router.push("/signin", undefined, { shallow: true })}
        >
          {"I have an account"}
        </Button>
      </Flex>
    </Flex>
  );
}

export default withAuth(Signup);
