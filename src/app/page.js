import { auth } from "@/auth";
import HomeComponent from "@/components/home";
import '../styles/home.css'

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex-middle">
      <h1 className="home-header">TIC TAC TOE</h1>
      <HomeComponent session={session}/>
    </div>
  );
}
