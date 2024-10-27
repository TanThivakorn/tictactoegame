"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

import { buttonStyle } from "@/styles/buttonStyle";
import { userStore } from "@/store";

export default function LogoutButton() {
  const router = useRouter();

  const { resetUser } = userStore();
  const handleButton = () => {
    router.push("/");

    signOut("google");
    resetUser();
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
