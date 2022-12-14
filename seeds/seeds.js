const sequelize = require("../config/connection");
// const { User, Song, Playlist, SongPlaylist } = require('../models');

const seedUser = require("./user-seed");
const seedPlaylist = require("./playlist-seed");
const seedSong = require("./song-seed");
const seedPlaylistSong = require("./playlist-song-seed");

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const song of songData) {
//     await Song.create({
//       ...song,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   for (const playlist of playlistData) {
//     await Playlist.create({
//       ...playlist,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");

  await seedPlaylist();
  console.log("\n----- PLAYLISTS SEEDED -----\n");

  await seedSong();
  console.log("\n----- SONGS SEEDED -----\n");

  await seedPlaylistSong();
  console.log("\n----- PLAYLIST SONGS SEEDED -----\n");

  process.exit(0);
};

seedAll();
