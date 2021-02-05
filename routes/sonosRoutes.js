module.exports = app => {
  
  // Discover Device
  app.get("/sonos", (req, res) => {
    const { Sonos } = require("sonos");

    const device = new Sonos("192.168.1.126");

    device.getVolume()
      .then(volume => console.log(`current volume = ${volume}`))
      .catch(err => console.log(err))

    device.setVolume(36);


    res.sendStatus(200);
  })

  // // Get volume
  // app.get("/sonos/volume", (req, res) => {
    
  // })

  // // Set volume
  // app.put("/sonos/volume", (req, res) => {

  // })

}