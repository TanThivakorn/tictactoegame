"use client"

import Image from "next/image";
import LoginButton from "@/ui/loginButton";
import PlayButton from "@/ui/playButton";
import LogoutButton from "@/ui/logoutButton";
import SwitchModeButton from "@/ui/SwitchModeButton";
import { userStore } from "@/store";

export default function HomeComponent({session}) {

  const setUserName = userStore((state) => state.setUserName);
  const setUserImage = userStore((state) => state.setUserImage);

  if (session && session.user){
    setUserName(session.user.name);
    setUserImage(session.user.image);
  }

  return (
    <div>
      {!session ? (
        <>
          <p>Please sign in before playing</p>
          <LoginButton />
        </>
      ) : (
        <>
          <p>Username = {session?.user?.name}</p>
          <Image
            src={session.user.image}
            alt="profile avatar"
            width={150}
            height={150}
          />
          <PlayButton />
          <LogoutButton />
          <SwitchModeButton />
        </>
      )}
    </div>
  );
}
