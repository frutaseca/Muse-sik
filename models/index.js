const User = require("./User");
const Song = require("./Song");
const Playlist = require("./Playlist");
const PlaylistSong = require("./PlaylistSong");

// User.hasMany(Song, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Song.belongsTo(User, {
//     foreignKey: 'user_id'
// })

User.hasMany(Playlist, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Playlist.belongsTo(User, {
  foreignKey: "user_id",
});

Playlist.belongsToMany(Song, {
  through: PlaylistSong,
  foreignKey: "playlist_id"
});

Song.belongsToMany(Playlist, {
  through: PlaylistSong,
  foreignKey: "song_id"
});

module.exports = { User, Song, Playlist, PlaylistSong };
