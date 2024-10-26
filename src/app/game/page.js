"use client";

import { useEffect, useState } from "react";
import Board from "@/components/board";
import ResetGameButton from "@/ui/resetGameButton";
import LogoutButton from "@/ui/logoutButton";

import { userStore, gameStore } from "@/store";
import "../../styles/game.css";
import ScoreBox from "@/ui/scoreBox";

import Stack from "@mui/system/Stack";
import { Box, Grid } from "@mui/system";
import { boxNameStyle } from "@/styles/boxStyle";
import { Modal } from "@mui/material";
import { modalStyle } from "@/styles/modalStyle";
import GameResultModal from "@/ui/gameResultModal";

export default function Game() {
  const [showDialog, setShowDialog] = useState(false);
  const closeModal = () => {
    setShowDialog(false);
    resetBoard();
  };
  const openModal = () => {
    setShowDialog(true);
  };

  const {
    userSide,
    botSide,
    botScore,
    tieScore,
    userScore,
    winner,
    resetBoard,
    winStack
  } = gameStore();

  const { userName } = userStore();

  useEffect(() => {
    if (winner) {
      console.log("board reset !!");
      setTimeout(() => {
        openModal();
      }, 2000);
    }
  }, [winner]);

  return (
    <div className="flex-middle">
      <h1 className="game-header">TIC TAC TOE</h1>

      <Stack direction="row" spacing={1}>
        <Box sx={boxNameStyle({ justifyContent: "right" })}>
          {userName} {"("}
          {userSide}
          {")"}
        </Box>
        <Box sx={boxNameStyle({ width: 50 })}>VS</Box>
        <Box sx={boxNameStyle({ justifyContent: "left" })}>
          BOT {"("}
          {botSide}
          {")"}
        </Box>
      </Stack>

      <Stack direction="row" spacing={1} className="score-stack">
        <ScoreBox side="Player" score={userScore} />
        <ScoreBox side="Tie" score={tieScore} />
        <ScoreBox side="Bot" score={botScore} />
      </Stack>
      <Board />
      <ResetGameButton />
      <Stack
        direction="row"
        spacing={1}
        className="row-container sign-out-container"
      >
        <p>not you?</p>
        <LogoutButton />
      </Stack>
      <GameResultModal
        showDialog={showDialog}
        closeModal={closeModal}
        winner={winner}
        winstack={winStack}
      />
    </div>
  );
}
