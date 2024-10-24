"use client";

import { useStore } from "@/store";

export default function SwitchModeButton() {
  const colorMode = useStore((state) => state.colorMode);
  const setColorMode = useStore((state) => state.setColorMode);

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
