import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import SignIn from "./page";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => "/signin",
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

test("renders signin page", () => {
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

  const { asFragment } = render(
    <Provider store={store}>
      <SignIn />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});