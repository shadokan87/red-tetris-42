import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Lobby from "./page";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

jest.mock("../contexts/axios", () => ({
  useAxios: () => ({
    axiosReady: true,
    axiosInstance: {
      get: jest.fn(() => Promise.resolve({ data: {} })),
      post: jest.fn(() => Promise.resolve({ data: {} })),
      delete: jest.fn(() => Promise.resolve({ data: {} })),
    },
  }),
}));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => "/lobby",
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

test("renders lobby page", async () => {
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

  let result;
  await waitFor(() => {
    result = render(
      <Provider store={store}>
        <Lobby />
      </Provider>
    );
  });

  expect(result.asFragment()).toMatchSnapshot();
});
