const { Router } = require("express");
const Song = require("./songs");
const router = new Router();
const auth = require("./middleware");

router.get("/playlists", auth, (req, res) => {
  Playlist.findAll({ where: { userId: req.user.id } })
    .then(playlist => {
      if (!playlist) {
        return res.status(404).send({
          message: `"Playlist not found"`
        });
      }
      return res.send(playlist);
    })
    .catch(error => next(error));
});

router.post("/playlists", auth, (req, res, next) => {
  const playlist = {
    name: req.body.name,
    userId: req.user.id
  };
  Playlist.create(playlist)
    .then(playlist => {
      if (!playlist) {
        return res.status(404).send({
          message: "Playlist not creaeted"
        });
      }
      return res.status(201).send(playlist);
    })
    .catch(error => next(error));
});

router.get("/playlists/:id/", auth, (req, res, next) => {
  Song.findAll({ where: { playlistId: req.params.id } })
    .then(playlist => {
      console.log(playlist);
      if (playlist.length === 0) {
        return res.status(404).send({
          message: `"Playlist not found"`
        });
      }
      return res.status(200).send(playlist);
    })
    .catch(error => next(error));
});

router.delete("/playlists/:id", auth, (req, res, next) => {
  Playlist.findById(req.params.id)
    .then(playlist => {
      if (playlist.userId !== req.user.id) {
        return res.status(404).send({
          message: `Playlist not found`
        });
      }
      return (
        Song.destroy({ where: { playlistId: req.params.id } }) &&
        playlist.destroy()
      ).then(() =>
        res.status(200).send({
          message: `Playlist is deleted`
        })
      );
    })
    .catch(error => next(error));
});

module.exports = router;
