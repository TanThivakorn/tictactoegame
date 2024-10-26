"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { buttonStyle } from "@/styles/buttonStyle";

export default function LogoutButton() {
  const router = useRouter();
  const handleButton = () => {
    signOut("google").then(() => {
      router.push("/");
    });
  };

  return (
    <>
      <Button
        variant="elevated "
        sx={buttonStyle({ padding: 0.5 })}
        onClick={handleButton}
      >
        Sign Out
      </Button>
    </>
  );
}
