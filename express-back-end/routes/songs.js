const { Router } = require("express");

const router = new Router();

router.post("/playlists/:id/songs", (req, res, next) => {
  const song = {
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    playlistId: req.params.id
  };
  Song.create(song)
    .then(song => {
      return res.status(201).send(song);
    })
    .catch(error => next(error));
});

module.exports = router;
