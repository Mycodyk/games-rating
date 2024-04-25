const {
  mainRouteController,
  GameController,
  voteRouteController,
  defaultRouteController,
} = require("../../controllers/index.js");

const AppRoutes = (req, res) => {
  const url = req.url;

  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      GameController.getGame(res);
      break;

    case "/vote":
      voteRouteController(req, res);
      break;

    // ...другие маршруты
    default:
      defaultRouteController(res, url);
  }
};

module.exports = { AppRoutes };
