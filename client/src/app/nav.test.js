import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Navbar from "./nav";
import React from "react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test("renders navbar", () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    session: {
      user: null,
      axiosConfig: null,
      token: "mocked_token",
    },
    lobby: {
      room: null,
    },
  });

  const navItems = [
    { label: "Room", pathname: "/room", disabled: true },
    { label: "Lobby", pathname: "/lobby", disabled: false },
  ];

  const { asFragment } = render(
    <Provider store={store}>
      <Navbar navItems={navItems} />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
