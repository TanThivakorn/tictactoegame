"use client";

import { Box } from "@mui/material";

import "../styles/game.css"


import { boxScoreStyle } from "@/styles/boxStyle";

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
