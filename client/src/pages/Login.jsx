import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <img
          src="https://images.unsplash.com/photo-1633000116322-d7f5cb7d3ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
          alt="White vase"
          height="500"
        />
        <h1>Welcome to App Name</h1>
        <h3>We make it easy for everyone to sell their stuff.</h3>
        <Button variant="outlined" startIcon={<GoogleIcon />}>
          Sign in with Google
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default Login;
