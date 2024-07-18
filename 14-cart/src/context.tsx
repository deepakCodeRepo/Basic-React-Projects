import { createContext, Dispatch, useContext } from "react";
import useCartReducer from "./reducer";
import type { CartActionType } from "./reducer";

export type Item = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

export type AppContextType = {
  state: Item[];
  dispatch: Dispatch<CartActionType>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useCartReducer();

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("useTheme must be used within the ThemeProvider");
  return context;
};
