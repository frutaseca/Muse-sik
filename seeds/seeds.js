const sequelize = require("../config/connection");
// const { User, Song, Playlist, SongPlaylist } = require('../models');

const seedUser = require("./user-seed");
const seedPlaylist = require("./playlist-seed");
const seedSong = require("./song-seed");
const seedPlaylistSong = require("./playlist-song-seed");
const chalk = require("chalk")
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
  console.log(chalk.magenta("\n----- DATABASE SYNCED -----\n"));

  await seedUser();
  console.log(chalk.magenta("\n----- USERS SEEDED -----\n"));

  await seedPlaylist();
  console.log(chalk.magenta("\n----- PLAYLISTS SEEDED -----\n"));

  await seedSong();
  console.log(chalk.magenta("\n----- SONGS SEEDED -----\n"));

  await seedPlaylistSong();
  console.log(chalk.bgMagenta("\n----- PLAYLIST SONGS SEEDED -----\n"));

  process.exit(0);
};

seedAll();
