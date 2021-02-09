import React from "react";
import {
  Grid,
  Button
} from "@material-ui/core";

const AppsControl = () => {
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
        justify="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          color
        >

        </Button>

      </Grid>
    </Grid>
  );
};

export default AppsControl;