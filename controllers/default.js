const path = require("path");

const staticFile = require("../appModules/http-utils/static-file.js");
const mimeTypes = require("../appModules/http-utils/mime-types.js");

function defaultRouteController(res, publicUrl) {
  const extname = String(path.extname(publicUrl)).toLowerCase();
  if (extname in mimeTypes) {
    staticFile(res, publicUrl, extname);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
}

module.exports = defaultRouteController;
