"use strict";

const playListHelper = require("../../lib/util/data-helpers");

const express = require("express");
const songRoutes = express.Router();

module.exports = function(DataHelpers) {
  songRoutes.get("/", function(req, res) {
    DataHelpers.getSongs((err, songs) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(songs);
      }
    });
  });

  songRoutes.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: "invalid request: no data in POST body" });
      return;
    }

    // const user = req.body.user
    //   ? req.body.user
    //   : playListHelper.generateRandomUser();
    // const song = {
    //   user: user,
    //   content: {
    //     text: req.body.text
    //   },
    //   created_at: Date.now()
    // };

    DataHelpers.saveSong(song, err => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return songRoutes;
};
