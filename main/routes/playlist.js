const express = require("express");

const bodyparser = require("body-parser");
// const client = require("../db");

const app = express();

app.use(bodyparser.json());

const database = {
  users: [
    {
      id: 111,
      name: "Chris",
      email: "chris.drysdale12@gmail.com",
      password: "password"
      // joined: new Time()
    },
    {
      id: 222,
      name: "Nick",
      email: "nhoszko@gmail.com",
      password: "password"
      // joined: new Time()
    },
    {
      id: 333,
      name: "Zach",
      email: "zscullivan93@gmail.com",
      password: "password"
      // joined: new Time()
    }
  ]
};

app.get("/", (req, res) => {
  res.send(database.playlists);
});

app.get("playlist/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.playlists.forEach(playlists => {
    if (playlist.id === id) {
      found = true;
      return res.json(playlists);
    }
  });
  if (!found) {
    res.status(400).json("playlist not found");
  }
});

app.get("/tracks/id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.playlists.tracks.forEach(playlists => {
    if (playlist.tracks.id === id) {
      found = true;
      return res.json(id);
    }
  });
  if (!found) {
    res.status(400).json("track not found");
  }
});

app.post("/playlist", (req, res) => {
  const { id } = req.body;
  database.playlists.push({
    id: "Awesome-Slender-Velociraptor"
  });
  res.json(database.users[database.users.length - 1]);
});
