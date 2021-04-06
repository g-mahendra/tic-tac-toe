import React, { useState } from "react";
import Board from "../components/Board";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";
import { db } from "../src/config/firebase";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  playAgain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Game = () => {
  const [realGuest, setrealGuest] = useState("");
  const [realHost, setrealHost] = useState("");
  const [winner, setWinner] = useState("");
  const router = useRouter();
  const {
    query: { code, host, guest },
  } = router;
  const classes = useStyles();
  const playAgain = () => {
    setWinner("");
    if (host == 1) {
      db.ref(`/game/${code}`)
        .update({
          host: realHost,
          moves: [{ move: "", index: 0 }],
          winner: "",
        })
        .then((res) =>
          router.push({
            pathname: "/game",
            query: { code: code, host: 1, guest: 0 },
          })
        )
        .catch((e) => console.log(e));
    } else if (guest == 1) {
      db.ref(`/game/${code}`)
        .update({
          guest: realGuest,
        })
        .then((res) =>
          router.push({
            pathname: "/game",
            query: { code: code, guest: 1, host: 0 },
          })
        )
        .catch((e) => console.log(e));
    }
  };

  return (
    <>
      <Head>
        <title>The Game Board</title>
        <link rel="icon" href="/ttcicon.svg" />
      </Head>
      <main>
        <Grid className={classes.root} container>
          <Grid className={classes.sidebar} item xs={12} sm={4}>
            <Sidebar winner={winner} guest={realGuest} host={realHost} />
          </Grid>
          <Grid className={classes.temp} item sm={2} />
          {winner ? (
            <Grid className={classes.playAgain} item>
              <Typography variant="h2" component="h2">
                Game Over
              </Typography>
              <Button onClick={playAgain} color="primary" size="large">
                Play Again
              </Button>
            </Grid>
          ) : (
            <Grid xs={12} item sm={5}>
              <Board
                getUsers={(user) => {
                  setrealGuest(user.guest);
                  setrealHost(user.host);
                  setWinner(user.winner);
                }}
                code={code}
                host={host}
                guest={guest}
              />
            </Grid>
          )}
          <Grid className={classes.temp} item sm={1} />
        </Grid>
      </main>
    </>
  );
};

export default Game;
