import { useReducer } from "react";
import type { Item } from "./context";
import data from "./data";

export type CartActionType = {
  type: "increment" | "decrement" | "clear" | "remove";
  id?: string;
};

const reducerFunction = (state: Item[], action: CartActionType): Item[] => {
  switch (action.type) {
    case "increment": {
      return state.map((item) => {
        return item.id === action.id
          ? { ...item, amount: item.amount + 1 }
          : item;
      });
    }
    case "decrement": {
      return state.map((item) => {
        if (item.amount === 1) return item;
        return item.id === action.id
          ? { ...item, amount: item.amount - 1 }
          : item;
      });
    }
    case "remove": {
      return state.filter((item) => !(item.id === action.id));
    }
    case "clear":
      return [];
    default:
      return state;
  }
};

const useCartReducer = () => {
  return useReducer(reducerFunction, data);
};

export default useCartReducer;
