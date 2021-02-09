import React from "react";
import axios from "axios";
import {
  Grid,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import amazonPrimeVideoLogo from "./images/Amazon_Prime_Video_Logo.svg";
import cbsAllAccessLogo from "./images/CBS_All_Access_Logo.svg";
import disneyPlusLogo from "./images/Disney+_Logo.svg";
import googlePlayMoviesTvLogo from "./images/Google_Play_Movies_Tv_Logo.svg";
import hboMaxLogo from "./images/HBO_Max_Logo.svg";
import huluLogo from "./images/Hulu_Logo.svg";
import netflixLogo from "./images/Netflix_Logo.svg";
import vuduLogo from "./images/Vudu_Logo.svg";
import youtubeLogo from "./images/YouTube_Logo.svg";

const useStyles = makeStyles({
  appButton: {
    height: "15vw",
    width: "30vw"
  },
  appLogo: {
    maxHeight: "10vw",
    maxWidth: "28vw"
  },
  row: {
    marginBottom: "7px"
  }
});

const AppsControl = () => {
  const classes = useStyles();

  const handleClick = app => () => {
    axios.put("/samsung/app", { app })
      .then(() => console.log(`Opening ${app}`))
      .catch(err => console.error(err))
  };

  return(
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="start"
    >
      <Grid
        item
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.row}
      >
        <Button
          variant="contained"
          color="default"
          className={classes.appButton}
          onClick={handleClick("Amazon Prime Video")}
        >
          <img 
            src={amazonPrimeVideoLogo} 
            alt="Amazon Prime Video"
            className={classes.appLogo}
          />
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.appButton}
          onClick={handleClick("CBS All Access")}
        >
          <img 
            src={cbsAllAccessLogo} 
            alt="CBS All Access"
            className={classes.appLogo}
          />
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.appButton}
          onClick={handleClick("Disney+")}
        >
          <img 
            src={disneyPlusLogo} 
            alt="Disney+"
            className={classes.appLogo}
          />
        </Button>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.row}
      >
        <Button
          variant="contained"
          color="default"
          className={classes.appButton}
          onClick={handleClick("Google Play Movies")}
        >
          <img 
            src={googlePlayMoviesTvLogo} 
            alt="Google Play Movies"
            className={classes.appLogo}
          />
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.appButton}
          onClick={handleClick("HBO Max")}
        >
          <img 
            src={hboMaxLogo} 
            alt="HBO Max"
            className={classes.appLogo}
          />
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.appButton}
          onClick={handleClick("Hulu")}
        >
          <img 
            src={huluLogo} 
            alt="Hulu"
            className={classes.appLogo}
          />
        </Button>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.row}
      >
        <Button
          variant="contained"
          color="default"
          className={classes.appButton}
          onClick={handleClick("Netflix")}
        >
          <img 
            src={netflixLogo} 
            alt="Netflix"
            className={classes.appLogo}
          />
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.appButton}
          onClick={handleClick("Vudu")}
        >
          <img 
            src={vuduLogo} 
            alt="Vudu"
            className={classes.appLogo}
          />
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.appButton}
          onClick={handleClick("Youtube")}
        >
          <img 
            src={youtubeLogo} 
            alt="Youtube"
            className={classes.appLogo}
          />
        </Button>
      </Grid>
    </Grid>
  );
};

export default AppsControl;