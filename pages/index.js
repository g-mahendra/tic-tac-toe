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
        <meta
          name="description"
          content="This game is ceated using Next.js and Firebase"
        ></meta>
        <meta
          name="description"
          content="Next.js React framework Firebase backend as a service multiplayer online"
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
