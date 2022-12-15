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
  console.log(chalk.red("DATABASE SYNCED"));

  await seedUser();
  console.log(chalk.blue(" USERS SEEDED "));

  await seedPlaylist();
  console.log(chalk.blue("PLAYLISTS SEEDED"));

  await seedSong();
  console.log(chalk.yellow("SONGS SEEDED"));

  await seedPlaylistSong();
  console.log(chalk.green("\n----- PLAYLIST SONGS SEEDED -----\n"));

  process.exit(0);
};

seedAll();
