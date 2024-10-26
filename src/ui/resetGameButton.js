"use client";

import { Button } from "@mui/material";

import { gameStore } from "@/store";
import { buttonStyle } from "@/styles/buttonStyle";
import RefreshIcon from '@mui/icons-material/Refresh';

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
