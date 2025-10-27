import { React, createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({employees: [] , admin: []});
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    console.log(employees);
    setUser({ employees, admin });

    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (savedUser) setLoggedInUser(savedUser);
  }, []);

  const logInUser = (user) => {
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  // 👇 logout helper
  const logOutUser = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  const updateUserData = (newUserData) => {
    setUser( prev=>({...prev, employees: newUserData}));
    localStorage.setItem("employees", JSON.stringify(newUserData));
  }
  return (
    <div>
      <AuthContext.Provider value={{...user ,loggedInUser ,logInUser , logOutUser , updateUserData}}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
