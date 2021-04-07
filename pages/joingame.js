import React, { useState } from "react";
import { db } from "../src/config/firebase";
import { useRouter } from "next/router";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100vh",
    width: "100vw",
  },
  instructions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "70%",
  },
  code: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    fontSize: theme.spacing(10),
    margin: theme.spacing(5),
  },
  codeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btn: {
    backgroundColor: "#1c54b2",
    color: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "#33bfff",
    },
    marginTop: theme.spacing(2),
  },
  input: {
    margin: theme.spacing(5),
  },
}));

const JoinGame = () => {
  const [code, setCode] = useState("");
  const router = useRouter();
  const [player, setPlayer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    if (player === "" || code === "") {
      setError("All fields are necessary");
      return;
    }
    db.ref("/game").on("value", (snap) => {
      const val = snap.val();
      if (code in val) {
        db.ref(`/game/${code}`)
          .update({
            guest: player,
          })
          .then((res) => {
            setLoading(false);
            router.push({
              pathname: "/game",
              query: { code: code, guest: 1, host: 0 },
            });
          })
          .catch((e) => {
            setLoading(false);
            console.log(e);
          });
      } else {
        setLoading(false);
        setError("Code did not match! Please type a valid code");
      }
    });
  };
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Join a game</title>
        <meta
          name="description"
          content="This is simple tic-tac-toe game which can be played multiplayer"
        ></meta>
        <link rel="icon" href="/ttcicon.svg" />
      </Head>
      <Grid className={classes.root} container>
        <Grid className={classes.codeContainer} sm={6} item>
          <TextField
            value={code}
            variant="outlined"
            label="Enter Game code here"
            className={classes.code}
            onChange={(e) => setCode(e.target.value)}
          />
          <TextField
            value={player}
            variant="outlined"
            label="Enter a name to use in game"
            className={classes.code}
            onChange={(e) => setPlayer(e.target.value)}
          />
        </Grid>
        <Grid sm={0} item sm={1} />
        <Grid sm={4} className={classes.instructions} item>
          <Typography gutterBottom variant="h4" component="i">
            Join a game
          </Typography>
          <Typography gutterBottom variant="h6" component="p">
            Enter the game code sent by your friend in the box shown on the
            sreen and click " Join Game " button bellow to enter the game
          </Typography>
          {error ? (
            <Typography color="error" variant="h6" component="p">
              {error}
            </Typography>
          ) : null}
          <Button
            disabled={loading ? true : false}
            onClick={handleClick}
            className={classes.btn}
            size="large"
          >
            Join Game
          </Button>
        </Grid>
        <Grid sm={0} item sm={1} />
      </Grid>
    </>
  );
};
export default JoinGame;
