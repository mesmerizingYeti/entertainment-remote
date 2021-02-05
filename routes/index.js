module.exports = app => {
  require("./sonosRoutes")(app);
  require("./samsungRoutes")(app);
}