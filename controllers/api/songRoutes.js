const router = require("express").Router();
const { Song } = require("../../models");
const withAuth = require("../../utils/auth");
const axios = require("axios");

router.post("/search", withAuth, async (req, res) => {
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/search",
    params: { term: req.body.term, locale: "en-US", offset: "0", limit: "5" },
    headers: {
      "X-RapidAPI-Key": "404ef16414msh71fe621ba85efb3p1d805fjsnd4876a235c69",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };
  var holder = await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

    res.json(JSON.parse(holder))
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newSong = await Song.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSong);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const songData = await Song.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!songData) {
      res.status(404).json({ message: "No song with that id was found!" });
      return;
    }

    res.status(200).json(songData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
