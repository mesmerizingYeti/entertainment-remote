require('dotenv').config();
require("./config").config();
const express = require("express");
const { join } = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.static(join(__dirname, "client", "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});