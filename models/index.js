const User = require('./User');
const Song = require('./Song');
const Playlist = require('./Playlist');

User.hasMany(Song, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Playlist, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Playlist.hasMany(Song, {
    foreignKey: 'song_id',
    onDelete: "CASCADE"
});

Song.belongsToMany(Playlist, {
    through: {
        model: User,
        unique: false
    },
    as: 'playlist_song'
});

Song.belongsToMany(User, {
    through: {
        model: Playlist,
        unique: false
    },
    as: 'user_song'
});

Playlist.belongsToMany(User, {
    through: {
        model: Song,
        unique: false
    },
    as: 'user_playlist'
});

module.exports = { User, Song, Playlist };