"use client";

import { gameStore } from "@/store";

export default function ResetGameButton() {

  const {resetGame , botSide, botMove} = gameStore();

  const handelClick = () => {
    console.log(botSide);
    
    resetGame();
  };

  return (
    <>
      <button onClick={handelClick}>Reset Game</button>
    </>
  );
}
