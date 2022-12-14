const { Song } = require("../models");

const songData = [
  {
    song_name: "Nights",
    artist: "Frank Ocean",
    albumn: "blond",
    genre: "R&B",
  },
  {
    song_name: "56 Nights",
    artist: "Future",
    albumn: "56 Nights",
    genre: "Rap",
  },
  {
    song_name: "Watermelon Sugar",
    artist: "Harry Styles",
    albumn: "Fine Line",
    genre: "Pop",
  },
];

const seedSong = () => Song.bulkCreate(songData);

module.exports = seedSong;
