import { createContext, useContext, useState } from "react";

const SharedContext = createContext();

export const SharedContextProvider = ({ children }) => {
  const [signUpStatus, setSignUpStatus] = useState(false);

  const context = {
    signUpStatus,
    setSignUpStatus,
  };
  return (
    <SharedContext.Provider value={context}>{children}</SharedContext.Provider>
  );
};

export const useSharedContext = () => useContext(SharedContext);
