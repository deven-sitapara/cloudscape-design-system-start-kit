"use client";
import { createContext, useState } from "react";
import DashboardLayout from "./ui/dashboard/dashboard-layout";

const LoadingContext = createContext();
const UserLoginContext = createContext();
const LayoutContext = createContext();

let _isUserLogin = false;
if (typeof window !== "undefined") {
  // Safe to use localStorage
  _isUserLogin = localStorage.getItem("isLoggedIn");
}

function LoadingProvider({ children, ...props }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

function AuthProvider({ children, ...props }) {
  const [isUserLogin, setUserLogin] = useState(_isUserLogin);

  return (
    <UserLoginContext.Provider value={{ isUserLogin, setUserLogin }}>
      {children}
    </UserLoginContext.Provider>
  );
}

function LayoutProvider({ children, ...props }) {
  // Add layout-related state and functions here
  const [layout, setLayout] = useState({});

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export {
  AuthProvider,
  LoadingProvider,
  LayoutProvider,
  LoadingContext,
  UserLoginContext,
};
