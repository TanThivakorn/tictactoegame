"use client";

import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";

import "../styles/home.css";

import { userStore } from "@/store";
import LoginButton from "@/ui/loginButton";


export default function HomeComponent({ session }) {
  const router = useRouter();
  
  const { setUserName, setUserImage, userName, userImage} = userStore();

  if (session && session.user) {
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
