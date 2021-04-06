import React from "react";
import Grid from "@material-ui/core/Grid";
import ModeCard from "../components/ModeCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100vh",
    width: "100vw",
    position: "absolute",
  },
  background: {
    zIndex: 0,
    height: "auto",
    width: "auto",
    position: "absolute",
  },
}));

const makecode = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const data = [
  {
    id: "1",
    title: "Create a game",
    content:
      "Create a game with a game code and share it with your friend to start playing with him / her",
    path: "/creategame",
    params: makecode(6),
  },
  {
    id: "2",
    title: "Join a game",
    content:
      "Ask your friend for a game code and enter it in the next page to join the match created by him / her",
    path: "/joingame",
    params: null,
  },
];

const Choosemode = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Choose a game mode</title>
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
        <svg
          className={classes.background}
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="svgBackground" clipPath="url(#clip0)">
            <rect width="1920" height="1080" fill="white" />
            <rect id="Rectangle 1" width="1920" height="532" fill="#539FE4" />
            <ellipse
              id="Ellipse 2"
              cx="49.5"
              cy="604.5"
              rx="187.5"
              ry="184.5"
              fill="white"
            />
            <ellipse
              id="Ellipse 3"
              cx="512.5"
              cy="604.5"
              rx="187.5"
              ry="184.5"
              fill="white"
            />
            <ellipse
              id="Ellipse 4"
              cx="975.5"
              cy="604.5"
              rx="187.5"
              ry="184.5"
              fill="white"
            />
            <ellipse
              id="Ellipse 5"
              cx="1413.5"
              cy="604.5"
              rx="187.5"
              ry="184.5"
              fill="white"
            />
            <ellipse
              id="Ellipse 6"
              cx="1851.5"
              cy="604.5"
              rx="187.5"
              ry="184.5"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="1920" height="1080" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <Grid className={classes.root} container>
          {data.map((card) => {
            return (
              <Grid key={card.id} item>
                <ModeCard
                  title={card.title}
                  content={card.content}
                  path={card.path}
                  params={card.params}
                />
              </Grid>
            );
          })}
        </Grid>
      </main>
    </>
  );
};
export default Choosemode;
