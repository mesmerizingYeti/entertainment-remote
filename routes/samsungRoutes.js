// KEY_POWER
// KEY_HOME
// KEY_LEFT
// KEY_RIGHT
// KEY_UP
// KEY_DOWN
// KEY_ENTER
// KEY_RETURN
// KEY_PLAY -- toggles play and pause

// APPS
// Hulu - 3201601007625
// Netflix - 11101200001
// Prime Video - 3201512006785
// Youtube - 111299001912
// Google Play Movies & TV - 3201601007250
// Roku - 3201806016506
// Vudu - 111012010001
// HBO Max - 3201601007230
// Disney+ - 3201901017640


module.exports = app => {

  app.get("/samsung", (req, res) => {
    // 192.168.1.89
    // d4:9d:c0:fc:05:33

    const { Samsung, KEYS, APPS } = require("samsung-tv-control");

    const config = {
      ip: "192.168.1.89",
      mac: "D49DC0FC0533",
      nameApp: "Entertainment-Remote",
      saveToken: true
    };

    const control = new Samsung(config);

    control.turnOn();
    console.log("Control is turned on")
    control.isAvailable()
      .then(() => {
        // Get token for API
        console.log("Getting token");
        control.getToken(token => {
          console.info("# Response getToken:", token);
          control.openApp("3201601007230", (err, result) => {
            if (!err) {
              res.json(result);
            }
          });
        });


      })
      .catch(err => {
        console.log(err);
        res.sendStatus(404);
      })
  });

}