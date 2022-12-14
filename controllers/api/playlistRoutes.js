const router = require('express').Router();
const { Playlist, User } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', async (req, res) => {
//     try {
//         const playlistData = await Playlist.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['name'],
//                 },
//             ],
//         });
// console.log(playlistData);
//         const playlists = playlistData.map((playlist) => playlist.get({plain: true}));

//         res.render('homepage', {
//             playlists,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/:id', async (req, res) => {
//     try {
//         const playlistData = await Playlist.findByPk(req.params.id, {
//             include: [
//                 {
//                     model:User,
//                     attributes: ['name'],
//                 },
//             ],
//         });

//         const playlist = playlistData.get({plain: true});

//         res.render('playlist', {
//             ...playlist,
//             logged_in:req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.post('/', withAuth, async (req, res) => {
    try {
        const newPlaylist = await Playlist.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPlaylist);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const playlistData = await Playlist.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if (!playlistData) {
            res.status(404).json({ message: 'No Playlist with that id found!'});
            return;
        }

        res.status(200).json(playlistData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;