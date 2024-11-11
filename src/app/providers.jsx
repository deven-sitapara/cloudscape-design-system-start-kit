"use client";
import { createContext, useState } from "react";

const LoadingContext = createContext();
const LoagingContext = createContext();

function LoadingProvider({ children, ...props }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
let _isUserLogin = false;
if (typeof window !== "undefined") {
  // Safe to use localStorage
  _isUserLogin = localStorage.getItem("isLoggedIn");
}

// console.log({ _isUserLogin });

function AuthProvider({ children, ...props }) {
  const [isUserLogin, setUserLogin] = useState(_isUserLogin);

  return (
    <LoagingContext.Provider value={{ isUserLogin, setUserLogin }}>
      {children}
    </LoagingContext.Provider>
  );
}

export { AuthProvider, LoadingProvider, LoadingContext, LoagingContext };
