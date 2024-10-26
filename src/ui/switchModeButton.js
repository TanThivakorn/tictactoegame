"use client";

import { userStore } from "@/store";

export default function SwitchModeButton() {
  const colorMode = userStore((state) => state.colorMode);
  const setColorMode = userStore((state) => state.setColorMode);

  const onClick = () => {
    if (colorMode == "light") {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  };

  return (
    <>
      {colorMode == "light" ? (
        <button onClick={onClick}>Dark Mode</button>
      ) : (
        <button onClick={onClick}>Light Mode</button>
      )}
    </>
  );
}
