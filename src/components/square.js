"use client";

import { gameStore } from "@/store";

export default function Square({ value }) {
  const setBoard = gameStore((state) => state.setBoard);

  const {
    board,
    userSide,
    winner,
    checkWinnerAndUpdateScore,
    botMove,
    isUserTurn,
  } = gameStore();

  const handelClick = () => {
    if (isUserTurn && !board[value] && !winner) {
      setBoard(value, userSide);
      checkWinnerAndUpdateScore();

      if (!winner && board.includes("")) {
        console.log("bot move when click");

        botMove();
        checkWinnerAndUpdateScore();
      }
    }
  };

  return (
    <button className="square" onClick={handelClick}>
      {board[value]}
    </button>
  );
}
