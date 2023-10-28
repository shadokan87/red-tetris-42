import React, { createContext, useContext } from "react";
import { useAxiosInstance } from "../hooks/axiosInstance";

export const AxiosContext = createContext();

export const AxiosProvider = ({ children }) => {
  const [axiosReady, axiosInstance] = useAxiosInstance();
  return (
    <AxiosContext.Provider value={{ axiosReady, axiosInstance }}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => useContext(AxiosContext);
