import React, { useState, createContext } from "react";

interface AppContextType {
  isEnter: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const [isEnter, setIsEnter] = useState<boolean>(false);

  // handle mouse enter
  const handleMouseEnter = () => {
    setIsEnter(true);
  };
  // handle leave
  const handleMouseLeave = () => {
    setIsEnter(false);
  };

  const values = {
    isEnter,
    handleMouseEnter,
    handleMouseLeave,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default ContextProvider;
