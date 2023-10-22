import { Provider } from "react-redux";
import store from "./store";
export const WithRedux = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
