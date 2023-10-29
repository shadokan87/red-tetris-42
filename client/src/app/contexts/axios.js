import React, { createContext, useContext } from "react";
import { useAxiosInstance } from "../hooks/axiosInstance";

export const AxiosContext = createContext();

/**
 * Provides the Axios instance and readiness status to the application.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {React.ReactNode} The wrapped components with Axios context.
 */
export const AxiosProvider = ({ children }) => {
  const [axiosReady, axiosInstance] = useAxiosInstance();
  return (
    <AxiosContext.Provider value={{ axiosReady, axiosInstance }}>
      {children}
    </AxiosContext.Provider>
  );
};

/**
 * Retrieves the Axios instance and readiness status from the Axios context.
 * @returns {Object} The Axios instance and readiness status.
 */
export const useAxios = () => useContext(AxiosContext);
