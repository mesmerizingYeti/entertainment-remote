require('dotenv').config();
const express = require("express");
const { join } = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.static(join(__dirname, "client", "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(app);

const { SmartThingsClient, BearerTokenAuthenticator } = require("@smartthings/core-sdk");
const client = new SmartThingsClient(new BearerTokenAuthenticator(env.ACCESS_TOKEN));
client.devices.list()
  .then((devices) => console.log(JSON.stringify(devices)))
  .catch(err => console.error(err))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});