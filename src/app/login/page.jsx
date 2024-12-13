"use client";

import { Container, Header, Box, Grid } from "@cloudscape-design/components";

import { useContext } from "react";

import LoadingEffect from "../ui/loading-effect";
import LoginForm from "../ui/auth/LoginForm";
import { LoadingContext } from "../(auth)/providers";

export default function LoginPage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  return (
    <>
      {isLoading && <LoadingEffect></LoadingEffect>}
      <div
        className="flex items-center justify-center h-screen bg-white"
        style={{
          backgroundColor: "#90D5FF",
        }}
      >
        <Grid gridDefinition={[{ colspan: 12, offset: 0 }]}>
          <Container>
            <Box color="inherit" textAlign="left">
              <Header variant="h1" description="Sign in to your CM Law Firm">
                User Sign-In
              </Header>
              <div style={{ marginTop: "10px" }}>
                <LoginForm></LoginForm>
              </div>
            </Box>
          </Container>
        </Grid>
      </div>
    </>
  );
}
