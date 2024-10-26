"use client";

import { signIn } from "next-auth/react";
import { Button } from "@mui/material";

import "../styles/home.css";
import { buttonStyle } from "@/styles/buttonStyle";

export default function LoginButton() {
  return (
    <div className="sign-in-button">
      <Button
        variant="elevated "
        sx={buttonStyle}
        onClick={() => signIn("google")}
      >
        Sign In
      </Button>
    </div>
  );
}
