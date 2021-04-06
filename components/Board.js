import React, { useState } from "react";
import Square from "./Square";
import firebase from "firebase/app";
import "firebase/database";
import Head from "next/head";
import { useAuth } from "../src/config/context/AuthContext";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    height: "90vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
      height: "70vh",
    },
  },
  item: {
    width: "30%",
    height: "25%",
  },
  wrapper: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      height: "80vh",
    },
  },
  top: {
    boxSizing: "border-box",
    height: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const database = firebase.database();

const Board = ({ code, host, getUsers, guest }) => {
  const reference = database.ref(`/game/${code}`);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState("");
  const [isNextO, setIsNextO] = useState("O");
  const classes = useStyles();

  const sq = squares;
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    if (isNextO === "X" && guest == 1) {
      return;
    }
    if (isNextO === "O" && host == 1) {
      return;
    }
    if (isNextO === "Host Plays first" && guest == 1) {
      return;
    }
    var move = "";
    if (host == 1) {
      move = "X";
    } else if (guest == 1) {
      move = "O";
    }
    reference
      .once("value")
      .then((snapshot) => {
        const fetchedData = snapshot.val();
        const newMovesFetched = fetchedData.moves;
        if (host === true) console.log("this is X");
        else console.log("this is O");
        console.log(`Move: ${move}`);
        newMovesFetched.push({
          move,
          index: i,
        });
        reference
          .update({
            moves: newMovesFetched,
          })
          .then((res) => {
            isTurn = isNextO === "yes" ? "no" : "yes";
            setIsNextO(isTurn);
            console.log(`Is Next O: ${isTurn} `);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  if (!winner) {
    const winn = calculateWinner(squares);
    if (winn) {
      reference
        .update({
          winner: winn,
        })
        .then(() => {})
        .catch((e) => console.log(e));
    } else if (squares.includes(null) === false) {
      reference
        .update({
          winner: "It's a tie",
        })
        .then(() => {})
        .catch((e) => console.log(e));
    }
  }

  React.useEffect(() => {
    const change = database.ref(`/game/${code}`).on("value", (snap) => {
      const data = snap.val();
      if (data.guest && data.host) {
        const user = {
          guest: data.guest,
          host: data.host,
          winner: data.winner,
        };
        getUsers(user);
      }
      const squares = sq.slice();
      const moves = data.moves;
      for (let i = 0; i < data.moves.length; i++) {
        const index = moves[i].index;
        const move = moves[i].move;
        if (move === "") {
        } else {
          squares[index] = move;
        }
        console.log(moves[i]);
      }
      const mv = moves[moves.length - 1].move;
      const nextMove = mv === "X" ? "O" : mv === "O" ? "X" : "Host Plays first";
      setIsNextO(nextMove);
      setSquares(squares);
    });
    return () => database.ref(`/game/${code}`).off("value", change);
  }, []);

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <>
      <Grid item className={classes.wrapper} container>
        <Grid className={classes.top} item>
          <Typography variant="h5" component="b">
            Next Move {isNextO}
          </Typography>
        </Grid>
        <Grid container item className={classes.root}>
          {arr.map((num) => {
            return (
              <Grid key={num.toString()} className={classes.item} item>
                {renderSquare(num)}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
