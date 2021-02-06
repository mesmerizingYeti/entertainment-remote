const { Samsung, KEYS, APPS } = require("samsung-tv-control");

const config = {
  ip: "192.168.1.89",
  mac: "D49DC0FC0533",
  nameApp: "Entertainment-Remote",
  saveToken: true
};

const control = new Samsung(config);

control.turnOn();

control.isAvailable()
  .then(() => {
    control.getToken(token => {
      console.info("# Response getToken:", token);
    })
  })
  .catch(err => console.error(err))