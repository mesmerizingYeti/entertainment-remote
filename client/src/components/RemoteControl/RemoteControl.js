import React from "react";
import {
  Grid,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import HomeIcon from '@material-ui/icons/Home';
import UndoIcon from '@material-ui/icons/Undo';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import DirectionPad from "../DirectionPad";

const useStyles = makeStyles({
  powerButton: {
    color: "red",
    width: "20vw",
    height: "15vw"
  },
  homeButton: {
    width: "20vw",
    height: "15vw"
  },
  directionPad: {
    marginTop: "2.5vw",
    marginBottom: "2.5vw",
  },
  undoButton: {
    width: "20vw",
    height: "15vw"
  },
  playButton: {
    width: "20vw",
    height: "15vw"
  },
});

const RemoteControl = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="col"
        justify="flex-start"
        alignItems="center"
      >
        <Grid
          item
          container
          justify="space-around"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.powerButton}
          >
            <PowerSettingsNewIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.homeButton}
          >
            <HomeIcon />
          </Button>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.directionPad}
        >
          <DirectionPad />
        </Grid>
        <Grid
          item
          container
          justify="space-around"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.undoButton}
          >
            <UndoIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.playButton}
          >
            <PlayArrowIcon />
          </Button>
        </Grid>
      </Grid>
    </>
  )
};

export default RemoteControl;