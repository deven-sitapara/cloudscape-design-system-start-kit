import { LoadingContext, UserLoginContext } from "@/app/providers";
import {
  Button,
  FormField,
  Input,
  SpaceBetween,
} from "@cloudscape-design/components";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function LoginForm() {
  // use Context LoginContext to set setIsLoading
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { isUserLogin, setUserLogin } = useContext(UserLoginContext);
  const router = useRouter();

  useEffect(() => {
    if (isUserLogin) {
      //redirect to /dashboard
      router.push("/dashboard");
    }
  });
  return (
    <>
      <SpaceBetween size="m">
        <FormField label="Username">
          <Input
            type="text"
            placeholder="Username"
            value=""
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Password">
          <Input
            type="password"
            placeholder="Your password"
            onChange={() => {}}
          />
        </FormField>

        <Button
          onClick={() => {
            setIsLoading(true);

            setTimeout(() => {
              setIsLoading(false);
              // set login to browser storage

              localStorage.setItem("isLoggedIn", true);
              localStorage.setItem("username", "deven@sitapara.com");

              setUserLogin(true);
            }, 2000);
          }}
          loading={isLoading}
          variant="primary"
          textAlign="left"
        >
          Sign in
        </Button>
      </SpaceBetween>
    </>
  );
}
