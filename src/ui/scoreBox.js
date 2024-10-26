"use client";

import { Box } from "@mui/material";

import { boxScoreStyle } from "@/styles/boxStyle";

import "../styles/game.css"

export default function ScoreBox({ side, score }) {
  return (
    <div className="">
      <Box sx={boxScoreStyle} className="column-container">
        <p>{side} Score</p>
        <p className="score-text">{score}</p>
      </Box>
    </div>
  );
}
