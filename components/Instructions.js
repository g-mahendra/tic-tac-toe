import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
  modal: {
    maxWidth: "50%",
    // maxHeight: "90vh",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90vw",
    },
  },
  heading: {
    fontSize: theme.spacing(2),
  },
  subtitle: {
    fontSize: theme.spacing(1.5),
  },
  item: {
    marginTop: theme.spacing(1),
  },
}));

export default function Instructions(props) {
  const classes = useStyles();
  return (
    <div>
      <Backdrop
        className={classes.backdrop}
        open={props.open}
        onClick={props.handleClose}
      >
        <Paper className={classes.modal}>
          <Typography variant="h5" component="h4">
            Some instructions on How to play?
          </Typography>
          <Divider />
          <Box className={classes.item}>
            <Typography className={classes.heading} variant="h5" component="b">
              Players:
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
              There are two types of players one is THE HOST ( who craetes the
              game ) and the oter is THE GUEST ( who enters the game once the
              game is created )
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.item}>
            <Typography className={classes.heading} variant="h5" component="b">
              The marks:
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
              Every player is associated with a mark. THE HOST ha mark "X" while
              THE GUEST takes "O" mark.
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.item}>
            <Typography className={classes.heading} variant="h5" component="b">
              Two modes
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
              There are two modes in the game namely creategame and joingame.
              The player which creates a game in creategame mode is in fact THE
              HOST and the one who joins the game using joingame mode is THE
              GUEST.
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.item}>
            <Typography className={classes.heading} variant="h5" component="b">
              The mechanism
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
              For creating a new game, THE HOST shares the game code shown on
              the screen to the guest. The guest then enters that code in
              joingame section to start playing the game.
            </Typography>
            <Typography className={classes.subtitle} variant="h6" component="p">
              Note: THE HOST as well as THE GUEST must fill their names on the
              respective screens to start playing otherwise one will face an
              error message
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.item}>
            <Typography className={classes.heading} variant="h5" component="b">
              Can we play again ?
            </Typography>
            <Typography className={classes.subtitle} variant="h6">
              Once the game is over, you don't have to create a new game with a
              new code. THE HOST first has to tap Play Again button and then THE
              GUEST can do the same to play other game on the same code
            </Typography>
          </Box>
        </Paper>
      </Backdrop>
    </div>
  );
}
