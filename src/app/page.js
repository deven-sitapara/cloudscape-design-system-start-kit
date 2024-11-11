"use client";
import Image from "next/image";
import LoadingEffect from "./ui/loading-effect";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { LoagingContext } from "./providers";

export default function Home() {
  const router = useRouter();
  const { isUserLogin } = useContext(LoagingContext);

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
