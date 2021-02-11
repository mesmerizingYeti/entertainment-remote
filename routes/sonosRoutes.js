const sonos = require("../config/sonos.js");

module.exports = app => {

  // Get volume
  app.get("/sonos/volume", (req, res) => {
    sonos.getVolume()
      .then(volume => {
        console.log(`current volume = ${volume}`);
        res.send({ volume });
      })
      .catch(err => console.log(err))
  });

  // Set volume
  app.put("/sonos/volume", (req, res) => {
    if (typeof req.body.volume == "number" & 0 <= req.body.volume & req.body.volume <= 100) {
      sonos.setVolume(req.body.volume);
      res.sendStatus(200);
    }
    res.sendStatus(400);
  });

  // Get mute state
  app.get("/sonos/muted", (req, res) => {
    sonos.getMuted()
      .then(result => {
        console.log(result);
        res.sendStatus(200);
      })
      .catch(err => console.error(err))
  });

  // Set mute state
  app.put("/sonos/muted", (req, res) => {
    if (typeof req.body.muted == "boolean") {
      sonos.setMuted(req.body.muted);
      res.sendStatus(200);
    }
    res.sendStatus(400);
  })

}