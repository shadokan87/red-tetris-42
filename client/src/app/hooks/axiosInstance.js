import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axiosConfigSelector } from "../redux/sessionReducer";
import axios from "axios";

/**
 * Custom hook that returns the axios instance and its readiness status.
 * @returns {[boolean, AxiosInstance]} An array containing the readiness status and the axios instance.
 */
export const useAxiosInstance = () => {
  const [axiosInstance, setAxiosInstance] = useState(null);
  const axiosConfig = useSelector(axiosConfigSelector);

  useEffect(() => {
    if (axiosConfig) {
      setAxiosInstance({ ...axios.create(axiosConfig) });
    } else setAxiosInstance(null);
  }, [axiosConfig]);
  return [axiosInstance != null, axiosInstance];
};
