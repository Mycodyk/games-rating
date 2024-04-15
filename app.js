const http = require("http");

const { AppRoutes } = require("./appModules/route/route");

const server = http.createServer((req, res) => {
  AppRoutes(req, res);
});

server.listen(3005, () => console.log("server listen 3000 port"));
