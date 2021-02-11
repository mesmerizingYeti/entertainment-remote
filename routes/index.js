module.exports = app => {
  require("./sonosRoutes")(app);
  require("./samsungRoutes")(app);
  require("./htmlRoutes")(app);
}