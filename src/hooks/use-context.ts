import { useContext } from "react";
import { AppContext } from "../context/app-context";

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    console.log("useAppContext must be used within an AppContextProvider");
  }
  return context;
};