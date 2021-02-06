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
  })

  // Set volume
  app.put("/sonos/volume", (req, res) => {
    if (typeof req.body.volume == "number" & 0 <= req.body.volume & req.body.volume <= 100) {
      sonos.setVolume(req.body.volume);
      res.sendStatus(200);
    }
    res.sendStatus(400);
  })

}