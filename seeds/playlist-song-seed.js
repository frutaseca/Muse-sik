const { PlaylistSong } = require("../models");

const playlistSongData = [
  {
    playlist_id: 1,
    song_id: 1,
  },
  {
    playlist_id: 2,
    song_id: 2,
  },
  {
    playlist_id: 3,
    song_id: 3,
  },
];

const seedPlaylistSong = () => PlaylistSong.bulkCreate(playlistSongData);

module.exports = seedPlaylistSong;
