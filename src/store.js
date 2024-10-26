import { create } from "zustand";
import { persist } from "zustand/middleware";
import { checkWinner, findBestMove, getSide } from "@/utils/gameUtils";

export const userStore = create(
  persist((set) => ({
    userImage: "",
    userName: "",
    colorMode: "light",
    setUserImage: (userImage) => set({ userImage: userImage }),
    setUserName: (userName) => set({ userName: userName }),
    clear: () => set({ userName: "", userImage: "" }),
    setColorMode: (colorMode) => set({ colorMode: colorMode }),
  }))
);

export const gameStore = create((set) => ({
  gameRound: 1,
  userScore: 0,
  botScore: 0,
  tieScore: 0,
  userSide: "X",
  botSide: "O",
  winner: null,
  winStack: 0,
  isUserTurn: true,
  isGameActive: true,
  board: Array(9).fill(""),
  setUserSide: () =>
    set(() => {
      const side = getSide();
      return { userSide: side.player, botSide: side.bot };
    }),
  setBoard: (index, value) =>
    set((state) => ({
      board: state?.board?.map((item, i) => (i === index ? value : item)),
      isUserTurn: false,
    })),
  setWinner: (winner) => set({winner: winner}),
  checkWinnerAndUpdateScore: () =>
    set((state) => {
      const winner = checkWinner(state.board);

      switch (winner) {
        case "draw":
      console.log("winner ::" + winner);

          return {
            tieScore: state.tieScore + 1,
            gameRound: state.gameRound + 1,
            board: Array(9).fill(""),
            winner: "draw",
          };
        case "X":
        case "O":
          const isUserWinner = winner === state.userSide;
      console.log("winner ::" + winner);

          if (!isUserWinner) {
            return {
              botScore: state.botScore + 1,
              userScore: state.userScore - 1,
              gameRound: state.gameRound + 1,
              winner: state.botSide,
              board: Array(9).fill(""),
              userSide: state.botSide,
              botSide: state.userSide,
            };
          }
          const isWinStackFull = state.winStack === 3;
          return {
            userScore: state.userScore + (isWinStackFull ? 2 : 1),
            gameRound: state.gameRound + 1,
            winner: state.userSide,
            winStack: isWinStackFull ? 0 : state.winStack + 1,
            board: Array(9).fill(""),
            userSide: state.botSide,
            botSide: state.userSide,
          };
      }
      console.log("no winner");
      
      return {  };
    }),
  botMove: () =>
    set((state) => {
      const botNextMove = findBestMove(
        state.board,
        state.userSide,
        state.botSide
      );
      console.log("Bot move");

      return {
        board: state?.board?.map((item, i) =>
          i === botNextMove ? state.botSide : item
        ),
        isUserTurn: true,
      };
    }),
  resetGame: () =>
    set(() => {
      const side = getSide();
      return {
        gameRound: 1,
        userScore: 0,
        botScore: 0,
        tieScore: 0,
        board: Array(9).fill(""),
        userSide: side.player,
        botSide: side.bot,
        isUserTurn: side.player == "X",
        winner: null,
        winStack: 0,
      };
    }),
  resetBoard: () =>
    set((state) => ({
      gameRound: state.gameRound + 1,
      board: Array(9).fill(""),
      isUserTurn: state.botSide == "X",
      userSide: state.botSide,
      botSide: state.userSide,
      winner: null,
      winStack: 0,
    })),
}));
