"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const RESPONSE = {
  SUCCESS: {
    status: 200,
    message: "Login Success",
  },
  ERROR: {
    status: 400,
    message: "Login Failed",
  },
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});

  const Router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, password);
    if (username === "password" && password === "password") {
      setResponse(RESPONSE.SUCCESS);
      setTimeout(() => {
        Router.push("/dashboard");
      }, 1500);
    } else {
      setResponse(RESPONSE.ERROR);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          padding: "15px",
          width: "300px",
          border: "1px solid lightgray",
        }}
      >
        <form method="post" action="#" onSubmit={submitHandler}>
          <Typography
            variant="h6"
            component="h1"
            sx={{ paddingBottom: "15px", textAlign: "center" }}
          >
            Login
          </Typography>
          <Divider sx={{ marginBottom: "20px" }} />
          <FormGroup sx={{ marginBottom: "20px" }}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Type username here"
              value={username}
              onChange={(e) => {
                e.preventDefault();
                setUsername(e.target.value);
              }}
            />
          </FormGroup>

          <FormGroup sx={{ marginBottom: "30px" }}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Type password here"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
            />
          </FormGroup>

          {response.status && (
            <Alert
              severity={
                response.status === RESPONSE.SUCCESS.status
                  ? "success"
                  : "error"
              }
            >
              {response.message}
            </Alert>
          )}

          <Box sx={{ display: "block", margin: "10px", textAlign: "center" }}>
            <Button
              disabled={response.status === RESPONSE.SUCCESS.status}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
