import { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const appContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [pageID, setPageID] = useState(null);
  return (
    <appContext.Provider
      value={{ isSidebarOpen, setSidebarOpen, pageID, setPageID }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(appContext);
};

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
