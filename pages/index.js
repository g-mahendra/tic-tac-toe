import Head from "next/head";
import Dashboard from "./dashboard";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Tic-Tac-Toe Multiplayer</title>
        <meta
          name="description"
          content="This is simple tic-tac-toe game which can be played multiplayer"
        ></meta>
        <link rel="icon" href="/ttcicon.svg" />
      </Head>
      <main>
        <Dashboard />
      </main>
    </div>
  );
};
export default Home;
