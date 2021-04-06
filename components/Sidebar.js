import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: "40vh",
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
  },
  item: {
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1),
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.spacing(3),
    },
  },
  header: {
    fontSize: theme.spacing(4),
  },
}));

const Sidebar = ({ guest, host, winner }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item container>
      <Paper className={classes.root} elevation={10}>
        <Grid className={classes.item} item>
          <Typography
            className={classes.header}
            gutterBottom
            variant="h3"
            component="i"
          >
            Game Status
          </Typography>
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid className={classes.item} item>
          <Paper elevation={6} className={classes.paper}>
            <Typography
              className={classes.text}
              gutterBottom
              variant="h5"
              component="i"
            >
              Current Host: {host}
            </Typography>
          </Paper>
        </Grid>
        <Grid className={classes.item} item>
          <Paper elevation={6} className={classes.paper}>
            <Typography
              className={classes.text}
              gutterBottom
              variant="h5"
              component="i"
            >
              Current Guest: {guest}
            </Typography>
          </Paper>
        </Grid>
        <Grid className={classes.item} item>
          <Typography
            className={classes.text}
            gutterBottom
            variant="h5"
            component="i"
          >
            Winner: {winner}
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
