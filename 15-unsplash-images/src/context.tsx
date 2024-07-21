import { createContext, useContext, useEffect, useState } from "react";

type AppContextType = {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const getInitialDarkMode = (): boolean => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:light)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme");

  if (storedDarkMode === null) {
    return prefersDarkMode;
  }

  return storedDarkMode === "true";
};

// window
//   .matchMedia("(prefers-color-scheme: light)")
//   .addEventListener("change", () => {
//     getInitialDarkMode();
//   });

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getInitialDarkMode());
  const [searchText, setSearchText] = useState<string>("star");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    body?.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", JSON.stringify(newDarkTheme));
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, []);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchText, setSearchText }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("useAppContext must be used within the AppProvider");
  return context;
};
