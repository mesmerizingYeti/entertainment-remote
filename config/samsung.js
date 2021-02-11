const { Samsung } = require("samsung-tv-control");

const config = {
  ip: "192.168.1.89",
  mac: "D49DC0FC0533",
  nameApp: "Entertainment-Remote",
  saveToken: true
};

const samsung = new Samsung(config);

samsung.turnOn()
  .then(value => (value ? samsung.isAvailable() : null))
  .then(() => 
    samsung.getToken(token => 
      console.info("# Response getToken:", token)
    )
  )
  .catch(err => console.error(err))

module.exports = samsung;