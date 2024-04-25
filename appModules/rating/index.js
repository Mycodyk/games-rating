const { createRating, updateRating } = require("./calculation.js");
const config = require("./config.js");
const makeRatingFile = require("./rating-file.js");

module.exports = {
  config,
  makeRatingFile,
  createRating,
  updateRating,
};
