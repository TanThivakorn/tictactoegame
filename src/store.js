import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  checkWinner,
  findBestMove,
  getNewBoard,
  getSide,
} from "@/utils/gameUtils";

export const userStore = create(
  persist((set) => ({
    userImage: "",
    userName: "",
    colorMode: "light",
    setUserImage: (userImage) => set({ userImage: userImage }),
    setUserName: (userName) => set({ userName: userName }),
    resetUser: () => set({ userName: "", userImage: "" }),
  }))
);

export const gameStore = create((set) => ({
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
  checkWinnerAndUpdateScore: () =>
    set((state) => {
      if(state.winner){
        return {winner: state.winner}
      }
      const findWinner = checkWinner(state.board);

      switch (findWinner) {
        case "draw":
          console.log('DRAW!!!!');
          
          return {
            tieScore: state.tieScore + 1,
            winner: "draw",
          };
        case "X":
        case "O":
          const isUserWinner = findWinner === state.userSide;

          if (!isUserWinner) {
            return {
              botScore: state.botScore + 1,
              userScore: state.userScore - 1,
              winner: "bot",
              winStack: 0,
            };
          }
          const isWinStackFull = state.winStack === 3;
          console.log('check win stack : ' + isWinStackFull);
          
          return {
            userScore: state.userScore + (isWinStackFull ? 2 : 1),
            winner: "user",
            winStack: isWinStackFull ? 0 : state.winStack + 1,
          };
      }

      return {};
    }),
  botMove: () =>
    set((state) => {
      if (state.winner) {
        setTimeout(() => {
          set((state) => {
            return state.userSide === "O"
              ? { board: getNewBoard(), isUserTurn: true }
              : { board: Array(9).fill(""), isUserTurn: false };
          });
        }, 2000);
      } else {
        const botNextMove = findBestMove(
          state.board,
          state.userSide,
          state.botSide
        );

        return {
          board: state?.board?.map((item, i) =>
            i === botNextMove ? state.botSide : item
          ),
          isUserTurn: true,
        };
      }
      return {}
    }),
  resetGame: () =>
    set(() => {
      const side = getSide();
      return {
        userScore: 0,
        botScore: 0,
        tieScore: 0,
        board: side.player == "O" ? getNewBoard() : Array(9).fill(""),
        userSide: side.player,
        botSide: side.bot,
        isUserTurn: true,
        winner: null,
        winStack: 0,
      };
    }),
  resetBoard: () =>
    set((state) => {
      return {
        board: state.userSide == "X" ? getNewBoard() : Array(9).fill(""),
        isUserTurn: true,
        userSide: state.botSide,
        botSide: state.userSide,
        winner: null,
      };
    }),
}));
