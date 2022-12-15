const router = require("express").Router();
const { User, Playlist, Song, PlaylistSong } = require("../models");
const withAuth = require("../utils/auth");
const chalk = require('chalk')
router.get("/", async (req, res) => {
  try {
    const playlistData = await Playlist.findAll({
      include: [
        // User, Song
        {
          model: User,
          attributes: ["name"],
        },

        { model: Song },
      ],
    });
    // console.log(playlistData);
    const playlists = playlistData.map((playlist) =>
      playlist.get({ plain: true })
    );
    console.log(playlists);

    res.render("homepage", {
      playlists,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(chalk.red(err));
    res.status(500).json(err);
  }
});

router.get("/playlist", async (req, res) => {
  try {
    const userId = req.session.user_id;
    const playlistData = await Playlist.findAll({
      where: {
        user_id: userId,
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const playlist = playlistData.map((item) => item.get({ plain: true }));

    console.log(chalk.green("playlist", playlist));

    // playlistData.get({plain: true});

    res.render("playlist", {
      playlist,
      logged_in: req.session.logged_in,
      userName: req.session.user_name,
    });
  } catch (err) {
    console.log(chalk.red(err));
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//     try {
//         const songData = await Song.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['name'],
//                 },
//             ],
//         });

//         const songs = songData.map((song) => song.get({plain: true }));

//         res.render('homepage', {
//             songs,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/song/:id', async (req, res) => {
//     try {
//         const songData = await Song.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: User,
//                     attributes: ['name'],
//                 },
//             ],
//         });

//         const song = songData.get({ plain: true });

//         res.render('song', {
//             ...song,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get("/user", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Playlist }],
    });

    //,{ model: Song },{ model: PlaylistSong }

    const user = userData.get({ plain: true });

    res.render("homepage", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/user");
    return;
  }
  res.render("login");
});

module.exports = router;
