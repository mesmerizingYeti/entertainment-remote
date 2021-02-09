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
// CBS All Access - 3201710014981
// Disney+ - 3201901017640
// Google Play Movies - 3201601007250
// HBO Max - 3201601007230
// Hulu - 3201601007625
// Netflix - 11101200001
// Prime Video - 3201512006785
// Roku -  3201806016506
// Vudu - 111012010001
// Youtube - 111299001912
const { KEYS } = require("samsung-tv-control");
const samsung = require("../config/samsung.js");

module.exports = app => {

  app.get("/samsung/test", [
    function (req, res, next) {
      samsung.getAppsFromTV((err, result) => {
        if (err) {
          next(err);
        } else {
          res.send(result);
        }
      })
    }
  ])

  app.put("/samsung/key", [
    function (req, res, next) {
      console.log(req.body.key);
      if (typeof req.body.key == "string") {
       let key;
        switch(req.body.key) {
          case "power":
            key = KEYS.KEY_POWER;
            break;
          case "home":
            key = KEYS.KEY_HOME;
            break;
          case "left":
            key = KEYS.KEY_LEFT;
            break;
          case "right":
            key = KEYS.KEY_RIGHT;
            break;
          case "up":
            key = KEYS.KEY_UP;
            break;
          case "down":
            key = KEYS.KEY_DOWN;
            break;
          case "enter":
            key = KEYS.KEY_ENTER;
            break;
          case "return":
            key = KEYS.KEY_RETURN;
            break;
          case "play":
            key = KEYS.KEY_PLAY;
            break;
          default:
            key = null;
            break;
        };
      
        samsung.sendKey(key, (err, result) => {
          if (err) {
            next(err);
          } else {
            console.log(result);
            res.send(result);
          } 
        });
      }
    }
  ]);

  app.put("/samsung/app", [
    function (req, res, next) {
      console.log(req.body.app);
      if (typeof req.body.app == "string") {
        let app;
        switch (req.body.app) {
          case "CBS All Access":
            app = "3201710014981";
            break;
          case "Disney+":
            app = "3201901017640";
            break;
          case "Google Play Movies":
            app = "3201601007250";
            break;
          case "HBO Max":
            app = "3201601007230";
            break;
          case "Hulu":
            app = "3201601007625";
            break;
          case "Netflix":
            app = "11101200001";
            break;
          case "Prime Video":
            app = "3201512006785";
            break;
          case "Roku Channel":
            app = "3201806016506";
            break;
          case "Vudu":
            app = "111012010001";
            break;
          case "Youtube":
            app = "111299001912";
            break;
          default:
            app = null;
            break;
        }
      
        samsung.openApp(app, (err, result) => {
          if (err) {
            next(err);
          } else {
            console.log(result);
            res.send(result);
          } 
        });
      }
    }
  ]);

}