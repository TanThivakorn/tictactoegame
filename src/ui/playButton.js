"use client";

import { gameStore } from "@/store";
import { useRouter } from "next/navigation";

export default function PlayButton() {
  const router = useRouter();
  const setUserSide = gameStore((state) => state.setUserSide);

  const handleNavigate = () => {
    
    router.push("/game");
  };

  return (
    <>
      <button onClick={handleNavigate}>Play</button>
    </>
  );
}
