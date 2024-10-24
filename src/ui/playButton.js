"use client";

import { useRouter } from "next/navigation";

export default function PlayButton() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/game");
    
  };

  return (
    <>
      <button onClick={handleNavigate}>Play</button>
    </>
  );
}
