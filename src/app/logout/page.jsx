"use client";

import { useContext, useEffect } from "react";

import { LoagingContext } from "../providers";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const { isUserLogin, setUserLogin } = useContext(LoagingContext);
  const router = useRouter();

  useEffect(() => {
    if (isUserLogin) {
      //redirect to /login
      localStorage.setItem("isLoggedIn", false);
      setUserLogin(false);
      router.push("/login");
    }
  });
  return <></>;
}
