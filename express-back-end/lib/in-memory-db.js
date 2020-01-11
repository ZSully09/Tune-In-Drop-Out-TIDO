"use strict";

// Requiring a JSON file automatically parses it and returns the data. These
// are just example songs to make it less tedious to style the app initially.
const db = {
  songs: require("../data-files/initial-songs")
};

module.exports = db;
