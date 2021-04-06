import React from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState();

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const signout = () => {
    return auth.signOut();
  };
  const anonymusly = () => {
    return auth.signInAnonymously();
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signin,
    signout,
    anonymusly
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
