import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles(theme=>({
  root: {
    zIndex: 2,
    minWidth: theme.spacing(10),
    minHeight: theme.spacing(15),
    maxWidth: theme.spacing(40)
  },
}));

export default function SimpleCard({ title, content, path, params }) {
  const classes = useStyles();

  return (
    <Card elevation={8} className={classes.root}>
      <CardContent style={{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <Typography gutterBottom variant="h4" component="b">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="i">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        {params ? (
          <Link
            href={{
              pathname: `${path}`,
              query: { code: params },
            }}
          >
            <Button size="medium">Let's Play</Button>
          </Link>
        ) : (
          <Link href={path}>
            <Button size="medium">Let's Play</Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
