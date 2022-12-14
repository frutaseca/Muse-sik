const { Playlist } = require("../models");

const playlistData = [
  {
    name: "Party Songs",
    user_id: 1
  },
  {
    name: "Work-out Songs",
    user_id: 2
  },
  {
    name: "Deep Sleep Music",
    user_id: 3
  },
  {
    name: "Deep Focus",
    user_id: 1
  },
  {
    name: "Meditation Music",
    user_id: 2
  },
  {
    name: "Chill Music",
    user_id: 3
  },
  {
    name: "Chill Songs",
    user_id: 1
  },
  {
    name: "Mood Booster",
    user_id: 2
  },
  {
    name: "Coding Mode",
    user_id: 3
  },

];
const seedPlaylist = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylist;
