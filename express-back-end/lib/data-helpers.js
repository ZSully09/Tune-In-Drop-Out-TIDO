"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting songs, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {
    // saves a playlist song to `db`
    saveSong: function(newSong, callback) {
      simulateDelay(() => {
        db.songs.push(newSong);
        callback(null, true);
      });
    },

    // get all playlist songs in `db`, sorted by newest first
    getSongs: function(callback) {
      simulateDelay(() => {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        callback(null, db.songs.sort(sortNewestFirst));
      });
    }

    // TODO get all playlist songs in 'db', sorted by votes
  };
};
