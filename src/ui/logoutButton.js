"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LogoutButton() {
  const router = useRouter();
  const handleButton = () => {
    signOut("google");
    router.push("/");
  }

  return (
    <>
      <button onClick={handleButton}>Sign Out</button>
    </>
  );
}