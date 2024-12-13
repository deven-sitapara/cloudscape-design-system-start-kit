"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { UserLoginContext } from "./(auth)/providers";

export default function Home() {
  const router = useRouter();
  const { isUserLogin } = useContext(UserLoginContext);

  useEffect(() => {
    if (isUserLogin) {
      //redirect to /dashboard
      console.log({ isUserLogin });

      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  });

  return <></>;
}
