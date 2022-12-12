const router = require('express').Router();
const userRoutes = require('./userRoutes');
const songRoutes = require('./songRoutes');
const playlistRoutes = require('./playlistRoutes')

router.use('/users', userRoutes);
router.use('/song', songRoutes);
router.use('./playlist', playlistRoutes);

module.exports = router;