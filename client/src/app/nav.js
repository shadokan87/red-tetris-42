import React from "react";
import { Flex } from "antd";
import { useRouter } from "next/navigation";
import { Button } from "antd";

export const NavItem = ({ label, pathname, disabled }) => {
  const router = useRouter();
  return (
    <Button
      type="link"
      onClick={() => router.push(pathname, undefined, { shallow: true })}
      disabled={(disabled != undefined && disabled) || false}
    >
      {label}
    </Button>
  );
};

export default function Navbar({ navItems, rhs }) {
  return (
    <Flex justify="space-between">
      <Flex align="middle" classlabel="navbar">
        {navItems.map((itemProps, index) => (
          <NavItem key={index} {...itemProps} />
        ))}
      </Flex>
      {rhs && rhs()}
    </Flex>
  );
}
