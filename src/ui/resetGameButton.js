"use client";

import { Button } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';

import { gameStore } from "@/store";
import { buttonStyle } from "@/styles/buttonStyle";

export default function ResetGameButton() {

  const {resetGame , botSide, botMove} = gameStore();

  const handelClick = () => {
    
    resetGame();
  };

  return (
    <div className="reset-button">
      <Button 
      sx={buttonStyle({padding: 1})}
      onClick={handelClick}><RefreshIcon/></Button>
    </div>
  );
}
