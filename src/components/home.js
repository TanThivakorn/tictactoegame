"use client";

import LoginButton from "@/ui/loginButton";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";

import "../styles/home.css";

import { userStore } from "@/store";

export default function HomeComponent({ session }) {
  const router = useRouter();

  const setUserName = userStore((state) => state.setUserName);
  const setUserImage = userStore((state) => state.setUserImage);

  if (session && session.user) {
    console.log("session:: " + session);

    setUserName(session.user.name);
    setUserImage(session.user.image);
    router.push("/game");
  }

  return (
    <div>
      {!session ? (
        <div className="flex-middle">
          <p>Please sign in with Google before playing</p>
          <LoginButton />
        </div>
      ) : (
        <>
          <CircularProgress />
        </>
      )}
    </div>
  );
}
