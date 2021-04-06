import Head from "next/head";
import Dashboard from "./dashboard";
import { useAuth } from "../src/config/context/AuthContext";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Tic-Tac-Toe Multiplayer</title>
        <link rel="icon" href="/ttcicon.svg" />
      </Head>
      <main>
        <Dashboard />
      </main>
    </div>
  );
};
export default Home;
