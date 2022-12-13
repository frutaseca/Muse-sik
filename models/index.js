const User = require('./User');
const Song = require('./Song');
const Playlist = require('./Playlist');

User.hasMany(Song, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Song.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Playlist, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Playlist.belongsTo(User, {
    foreignKey: 'user_id'
})

Playlist.hasMany(Song, {
    foreignKey: 'song_id',
    onDelete: "CASCADE"
});

Song.belongsTo(Playlist, {
    foreignKey: 'song_id'
})



module.exports = { User, Song, Playlist };