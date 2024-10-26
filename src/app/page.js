import { auth } from "@/auth";
import HomeComponent from "@/components/home";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <h1>TIC TAC TOE GAME</h1>
      <HomeComponent session={session}/>
    </div>
  );
}
