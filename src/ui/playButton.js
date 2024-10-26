"use client";

import { gameStore } from "@/store";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function PlayButton() {
  const router = useRouter();
  const setUserSide = gameStore((state) => state.setUserSide);

  const handleNavigate = () => {
    router.push("/game");
  };

  return (
    <>
      <Button
        variant="contained"
        style={{
          borderRadius: 35,
          backgroundColor: "#E57373",
          padding: "18px 30px",
          fontSize: "18px",
        }}
        onClick={handleNavigate}
      >
        Play
      </Button>
    </>
  );
}
