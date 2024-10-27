"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Stack from "@mui/system/Stack";
import { Box } from "@mui/system";

import "../../styles/game.css";

import Board from "@/components/board";
import ResetGameButton from "@/ui/resetGameButton";
import LogoutButton from "@/ui/logoutButton";
import ScoreBox from "@/ui/scoreBox";
import GameResultModal from "@/ui/gameResultModal";
import { userStore, gameStore } from "@/store";
import { boxNameStyle } from "@/styles/boxStyle";

export default function Game() {
  const router = useRouter();

  const {
    userSide,
    botSide,
    botScore,
    tieScore,
    userScore,
    winner,
    resetBoard,
    isUserGetBonus,
  } = gameStore();

  const { resetUser, userName, userImage } = userStore();

  const [showDialog, setShowDialog] = useState(false);

  const closeModal = () => {
    setShowDialog(false);
    resetBoard();
  };
  const openModal = () => {
    setShowDialog(true);
  };

  useEffect(() => {
    if (winner) {
      setTimeout(() => {
        openModal();
      }, 1500);
    }
  }, [winner]);

  useEffect(() => {
    if (!userName && !userImage) {
      router.push("/");
    }
  }, [resetUser]);

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
        isUserGetBonus={isUserGetBonus}
      />
    </div>
  );
}
