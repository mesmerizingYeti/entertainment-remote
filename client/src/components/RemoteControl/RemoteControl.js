import React from "react";
import axios from "axios";
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
import VolumeControl from "../VolumeControl";

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
  returnButton: {
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

  const handleClick = key => () => {
    axios.put("/samsung/key", { key })
      .catch(err => console.error(err))
  }

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
            onClick={handleClick("power")}
          >
            <PowerSettingsNewIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.homeButton}
            onClick={handleClick("home")}
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
            className={classes.returnButton}
            onClick={handleClick("return")}
          >
            <UndoIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.playButton}
            onClick={handleClick("play")}
          >
            <PlayArrowIcon />
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
          <VolumeControl />
        </Grid>
      </Grid>
    </>
  )
};

export default RemoteControl;