const router = require('express').Router();
const { User, Playlist, Song } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const playlistData = await Playlist.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const playlists = playlistData.map((playlist) => playlist.get({plain: true}));

        res.render('homepage', {
            playlists,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/playlist/:id', async (req, res) => {
    try {
        const playlistData = await Playlist.findByPk(req.params.id, {
            include: [
                {
                    model:User,
                    attributes: ['name'],
                },
            ],
        });

        const playlist = playlistData.get({plain: true});

        res.render('playlist', {
            ...playlist,
            logged_in:req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const songData = await Song.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const songs = songData.map((song) => song.get({plain: true }));

        res.render('homepage', {
            songs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/song/:id', async (req, res) => {
    try {
        const songData = await Song.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const song = songData.get({ plain: true });

        res.render('song', {
            ...song,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login')
});

module.exports = router