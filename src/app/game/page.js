"use client";

import { useEffect, useState } from "react";
import Board from "@/components/board";
import ResetGameButton from "@/ui/resetGameButton";

import { userStore, gameStore } from "@/store";
import { useRouter } from "next/navigation";

export default function Game() {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);

  const {
    resetBoard,
    userSide,
    botSide,
    botScore,
    tieScore,
    gameRound,
    userScore,
    isUserTurn,
    botMove,
    setWinner
  } = gameStore();

  const { userName } = userStore();

  useEffect(() => {
    console.log("round changes : bot side :: " + botSide);
    setWinner(null);
    if (botSide == "X" && !isUserTurn && gameRound != 1) {
      console.log("bot move when round changes");
      
      botMove();
    }
  }, [gameRound]);

  return (
    <div>
      <h1>TIC TAC TOE GAME</h1>
      <p>
        {userName} | {userSide} VS BOT | {botSide}
      </p>
      <p>Player Score: {userScore}</p>
      <p>Bot Score: {botScore}</p>
      <p>Tie Score: {tieScore}</p>
      <p>Game Round: {gameRound}</p>
      <Board />
      <ResetGameButton />
      {showDialog && (
        <div className="dialog">
        </div>
      )}
    </div>
  );
}
