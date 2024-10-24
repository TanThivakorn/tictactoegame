import { create } from "zustand";

export const useStore = create((set) => ({
  userImage: "",
  userName: "",
  userScore: 0,
  botScore: 0,
  colorMode: "light",
  setUserImage: (userImage) => set({ userImage: userImage }),
  setUserName: (userName) => set({ userName: userName }),
  clear: () => set({ userName: "", userImage: "", userScore: 0, botScore: 0 }),
  setColorMode: (colorMode) => set({ colorMode: colorMode }),
}));
