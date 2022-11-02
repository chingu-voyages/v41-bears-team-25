import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { Typography } from "@mui/material";
import whiteVase from "../assets/images/WhiteVase.jpg";
import { useQuery } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();

  // const googleLoginQuery = useQuery(
  //   ["googleLogin"],
  // );

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={whiteVase} alt="White vase" height="500" />
        <Typography variant="h1">Welcome to App Name</Typography>
        <Typography variant="h4">
          We make it easy for everyone to sell their stuff.
        </Typography>
        <a href="http://localhost:3001/auth/google">
          <Button
            variant="outlined"
            // onClick={googleLoginQuery}
            startIcon={<GoogleIcon />}
          >
            Sign in with Google
          </Button>
        </a>
      </Container>
    </>
  );
};

export default Login;
