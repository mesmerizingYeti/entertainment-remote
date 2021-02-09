import React, { useState } from "react";
import {
  Grid,
  Paper,
  Slider,
  Button
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  paper: {
    padding: "5px"
  },
  volumeIcons: {
    color: "white"
  },
  slider: {
    width: "40vw"
  },
  muteButton: {
    width: "15vw",
    height: "15vw",
  },
});

const VolumeSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
    width: "40vw"
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const VolumeControl = () => {
  const classes = useStyles();
  const [volume, setVolume] = useState(15);

  const handleChange = (event, newVolume) => {
    setVolume(newVolume);
  }

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item>
              <VolumeSlider 
                valueLabelDisplay="auto"
                value={volume}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <VolumeUp />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.muteButton}
          >
            Mute
          </Button>
        </Grid>
      </Grid>
    </Paper>

  );
};

export default VolumeControl;