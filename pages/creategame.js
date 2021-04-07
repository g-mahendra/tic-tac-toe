import React, { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../src/config/firebase";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Head from "next/head";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
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
    width: "60%",
    margin: theme.spacing(5),
  },
}));

const CreateGame = () => {
  const router = useRouter();
  const [player, setPlayer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {
    query: { code },
  } = router;
  const classes = useStyles();
  const handleClick = () => {
    if (player === "") {
      setError("Please fill out the name");
      return;
    }
    setLoading(true);
    db.ref(`/game/${code}`)
      .update({
        host: player,
        moves: [{ move: "", index: 0 }],
        winner: "",
      })
      .then((res) => {
        setLoading(false);
        router.push({
          pathname: "/game",
          query: { code: code, host: 1, guest: 0 },
        });
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };
  return (
    <>
      <Head>
        <title>Create a new game</title>
        <meta
          name="description"
          content="This is simple tic-tac-toe game which can be played multiplayer"
        ></meta>
        <link rel="icon" href="/ttcicon.svg" />
      </Head>
      <Grid className={classes.root} container>
        <Grid className={classes.codeContainer} sm={6} item>
          <TextField
            className={classes.input}
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
            variant="outlined"
            label="Enter the name to be used in game"
          />
          <Paper elevation={10} className={classes.code}>
            {code}
          </Paper>
        </Grid>
        <Grid sm={0} item sm={1} />
        <Grid sm={4} className={classes.instructions} item>
          <Typography gutterBottom variant="h4" component="i">
            Create a game
          </Typography>
          <Typography gutterBottom variant="h6" component="p">
            Send the game code shown on the screen to your friend and ask them
            to enter the same code in join game page so that you both can play
            together
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
            Create Game
          </Button>
        </Grid>
        <Grid sm={0} item sm={1} />
      </Grid>
    </>
  );
};
export default CreateGame;
