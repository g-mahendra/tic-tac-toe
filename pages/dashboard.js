import React, { useState } from "react";
import { useAuth } from "../src/config/context/AuthContext";
import { useRouter } from "next/router";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Instructions from "../components/Instructions";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    position: "absolute",
    bottom: theme.spacing(1),
  },
  main: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heroContent: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "400px",
    marginLeft: "30px",
  },
  heroSvg: {
    height: "100vh",
    width: "auto",
  },
}));

const Dashboard = () => {
  const router = useRouter();
  const { anonymusly } = useAuth();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const signinUser = () => {
    try {
      anonymusly();
      router.push("/choosemode");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={classes.main}>
      <div className={classes.heroContent}>
        <div>
          <h1>Tic-Tac-Toe</h1>
          <h3
            style={{
              fontWeight: "lighter",
            }}
          >
            This is a simple but multiplayer online Tic-tac-toe game that you
            can play from comfort of your home with any of your firends just by
            sending a game code
          </h3>
          <button
            style={{
              backgroundImage: "linear-gradient(to right, blue, powderblue)",
              padding: "7px 0",
              border: "none",
              width: "300px",
              color: "white",
            }}
            onClick={signinUser}
            id={classes.playButton}
          >
            Lets Play
          </button>
          <button
            style={{
              backgroundImage: "linear-gradient(to right, blue, powderblue)",
              padding: "7px 0",
              border: "none",
              width: "300px",
              color: "white",
              marginTop: "10px",
            }}
            onClick={handleToggle}
            id={classes.playButton}
          >
            Instructions
          </button>
          <Instructions open={open} handleClose={handleClose} />
        </div>
        <footer>
          <Link
            className={classes.link}
            href="https://github.com/g-mahendra/tic-tac-toe"
          >
            <Typography variant="button">
              Checkout the sourcecode on Github
            </Typography>
          </Link>
        </footer>
      </div>
      <div>
        <svg
          className={classes.heroSvg}
          viewBox="0 0 960 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Hero" clipPath="url(#clip0)">
            <rect width="960" height="1080" fill="url(#paint0_linear)" />
            <g id="Frame 2">
              <ellipse id="Ellipse 1" cy="540" rx="103" ry="540" fill="white" />
            </g>
            <path
              id="Line 6"
              d="M395 370L566 912"
              stroke="white"
              strokeWidth="10"
            />
            <line
              id="Line 7"
              x1="623.726"
              y1="290.368"
              x2="814.726"
              y2="843.368"
              stroke="white"
              strokeWidth="10"
            />
            <line
              id="Line 8"
              x1="267.357"
              y1="599.278"
              x2="842.357"
              y2="399.278"
              stroke="white"
              strokeWidth="10"
            />
            <line
              id="Line 9"
              x1="311.445"
              y1="821.248"
              x2="922.445"
              y2="621.248"
              stroke="white"
              strokeWidth="10"
            />
            <path
              id="O"
              d="M359.633 490.117C359.633 500.148 357.945 508.914 354.57 516.414C351.195 523.867 346.414 529.562 340.227 533.5C334.039 537.438 326.82 539.406 318.57 539.406C310.508 539.406 303.359 537.438 297.125 533.5C290.891 529.516 286.039 523.867 282.57 516.555C279.148 509.195 277.391 500.688 277.297 491.031V483.648C277.297 473.805 279.008 465.109 282.43 457.562C285.852 450.016 290.68 444.25 296.914 440.266C303.195 436.234 310.367 434.219 318.43 434.219C326.633 434.219 333.852 436.211 340.086 440.195C346.367 444.133 351.195 449.875 354.57 457.422C357.945 464.922 359.633 473.664 359.633 483.648V490.117ZM346.203 483.508C346.203 471.367 343.766 462.062 338.891 455.594C334.016 449.078 327.195 445.82 318.43 445.82C309.898 445.82 303.172 449.078 298.25 455.594C293.375 462.062 290.867 471.062 290.727 482.594V490.117C290.727 501.883 293.188 511.141 298.109 517.891C303.078 524.594 309.898 527.945 318.57 527.945C327.289 527.945 334.039 524.781 338.82 518.453C343.602 512.078 346.062 502.961 346.203 491.102V483.508Z"
              fill="white"
            />
            <path
              id="X"
              d="M594.281 608.859L618.82 569.625H634.711L602.367 620.391L635.484 672H619.453L594.281 632.062L568.969 672H553.008L586.195 620.391L553.781 569.625H569.602L594.281 608.859Z"
              fill="white"
            />
            <path
              id="O_2"
              d="M900.633 727.117C900.633 737.148 898.945 745.914 895.57 753.414C892.195 760.867 887.414 766.562 881.227 770.5C875.039 774.438 867.82 776.406 859.57 776.406C851.508 776.406 844.359 774.438 838.125 770.5C831.891 766.516 827.039 760.867 823.57 753.555C820.148 746.195 818.391 737.688 818.297 728.031V720.648C818.297 710.805 820.008 702.109 823.43 694.562C826.852 687.016 831.68 681.25 837.914 677.266C844.195 673.234 851.367 671.219 859.43 671.219C867.633 671.219 874.852 673.211 881.086 677.195C887.367 681.133 892.195 686.875 895.57 694.422C898.945 701.922 900.633 710.664 900.633 720.648V727.117ZM887.203 720.508C887.203 708.367 884.766 699.062 879.891 692.594C875.016 686.078 868.195 682.82 859.43 682.82C850.898 682.82 844.172 686.078 839.25 692.594C834.375 699.062 831.867 708.062 831.727 719.594V727.117C831.727 738.883 834.188 748.141 839.109 754.891C844.078 761.594 850.898 764.945 859.57 764.945C868.289 764.945 875.039 761.781 879.82 755.453C884.602 749.078 887.062 739.961 887.203 728.102V720.508Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="874"
              y1="89"
              x2="480"
              y2="1080"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A45CFE" />
              <stop offset="0.280241" stopColor="#00A3FF" />
              <stop offset="1" stopColor="#8221FE" />
            </linearGradient>
            <clipPath id="clip0">
              <rect width="960" height="1080" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </main>
  );
};

export default Dashboard;
