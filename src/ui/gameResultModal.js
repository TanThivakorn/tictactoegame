import { Modal } from "@mui/material";
import { Box } from "@mui/system";

import '../styles/game.css'

import { modalStyle } from "@/styles/modalStyle";
import {
  WINNING_GIF,
  WIN_STREAk_GIF,
  LOSING_GIF,
  DRAW_GIF,
} from "@/constants/constants";


export default function GameResultModal({
  showDialog,
  closeModal,
  winner,
  isUserGetBonus,
}) {

  const getImage = (winner) => {
    switch (winner) {
      case "user":
        return !isUserGetBonus
          ? {
              header: "YOU WIN!!",
              paragraph: "+1 Point",
              image: WINNING_GIF,
            }
          : {
              header: "YOU WIN AND GET BONUS SCORE!!",
              paragraph: "+1 Point (+1 Bonus Point!!)",
              image: WIN_STREAk_GIF,
            };
      case "bot":
        return {
          header: "YOU LOSE",
          paragraph: "-1 Point",
          image: LOSING_GIF,
        };
      case "draw":
        return {
          header: "DRAW",
          paragraph: "Keep trying!!",
          image: DRAW_GIF,
        };
      default:
        return {
          header: "Unknown Result",
          paragraph: "Please check the game.",
          image: null,
        };
    }
  };

  const imageData = getImage(winner);

  return (
    <Modal open={showDialog} onClose={closeModal}>
      <Box sx={modalStyle}>
        <div className="flex-middle">
          <p>{imageData.header}</p>
          <img src={imageData.image} alt="winnign_gif" width={220} className="image-modal"/>
          <p>{imageData.paragraph}</p>
        </div>
      </Box>
    </Modal>
  );
}
