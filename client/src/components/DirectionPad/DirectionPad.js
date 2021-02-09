import React from "react";
import axios from "axios";
import {
  Button,
  Grid
} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "50vw",
    height: "50vw",
  },
  verticalButton: {
    position: "relative",
    height: "9.874vw",
    width: "30vw",
    zIndex: "1"
  },
  horizontalButton: {
    position: "relative",
    height: "30vw",
    width: "10vw",
    minWidth: "10vw",
    zIndex: "1"
  },
  enterButton: {
    height: "26.24vw",
    width: "26vw",
    margin: "2vw",
    zIndex: "1"
  },
});

const DirectionPad = () => {
  const classes = useStyles();

  const handleClick = key => () => {
    axios.put("/samsung/key", { key })
      .catch(err => console.error(err))
  }

  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        className={classes.container}
      >
        <Grid
          item
          container
          direction="row"
          justify="center"
        >
          {/* Top Button */}
          <Button 
            className={classes.verticalButton}
            variant="contained"
            color="primary"
            onClick={handleClick("up")}
          >
            <ArrowUpwardIcon/>
          </Button>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {/* Left Button */}
          <Button 
            className={classes.horizontalButton}
            variant="contained"
            color="primary"
            onClick={handleClick("left")}
          >
            <ArrowBackIcon />
          </Button>
          {/* Enter Button */}
          <Button 
            className={classes.enterButton}
            variant="contained"
            color="primary"
            onClick={handleClick("enter")}
          />
          {/* Right Button */}
          <Button 
            className={classes.horizontalButton}
            variant="contained"
            color="primary"
            onClick={handleClick("right")}
          >
            <ArrowForwardIcon />
          </Button>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {/* Bottom Button */}
          <Button 
            className={classes.verticalButton}
            variant="contained"
            color="primary"
            onClick={handleClick("down")}
          >
            <ArrowDownwardIcon />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default DirectionPad;