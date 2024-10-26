"use client";

import { gameStore } from "@/store";
import { Button } from "@mui/material";

import "../styles/game.css";
import { squareButtonStyle } from "@/styles/buttonStyle";

export default function Square({ value }) {
  const {
    board,
    userSide,
    winner,
    checkWinnerAndUpdateScore,
    botMove,
    isUserTurn,
    setBoard,
  } = gameStore();

  const handelClick = () => {

    if (isUserTurn && !board[value] && !winner) {
      setBoard(value, userSide);
      checkWinnerAndUpdateScore();

      if (!winner && board.includes("")) {
        botMove();
        checkWinnerAndUpdateScore();
      }
    }
  };

  return (
    <Button sx={squareButtonStyle} onClick={handelClick}>
      {board[value]}
    </Button>
  );
}
