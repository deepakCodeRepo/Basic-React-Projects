import { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [isShowModal, setShowModal] = useState(false);
  const [isShowSidebar, setShowSidebar] = useState(false);

  return (
    <appContext.Provider
      value={{ isShowModal, setShowModal, isShowSidebar, setShowSidebar }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(appContext);
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
