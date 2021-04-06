import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  square: {
    width: "100%",
    height: "100%",
    fontSize: theme.spacing(5),
    fontWeight: "bold",
    borderRadius: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]:{
      height: '70%',
      width: '100%'
    }
  },
}));

const Square = (props) => {
  const classes = useStyles();
  return (
    <Paper onClick={props.onClick} elevation={5} className={classes.square}>
      {props.value}
    </Paper>
  );
};

export default Square;
