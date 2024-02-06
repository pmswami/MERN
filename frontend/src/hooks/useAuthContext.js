import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  // If a context is used outside of wrapped component tree then React by default return null value for that context. So need to handle such case.
  if (!context) {
    throw Error(
      "useAuthContext must be used inside an AuthContextProvider only"
    );
  }
  return context;
};
