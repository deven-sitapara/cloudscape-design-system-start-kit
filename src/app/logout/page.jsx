"use client";

import { useContext, useEffect } from "react";

import { UserLoginContext } from "../providers";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const { isUserLogin, setUserLogin } = useContext(UserLoginContext);
  const router = useRouter();

  useEffect(() => {
    if (isUserLogin) {
      //redirect to /login
      localStorage.setItem("isLoggedIn", false);
      setUserLogin(false);
      router.push("/login");
    }
  });
  return <>logout...</>;
}
