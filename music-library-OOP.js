function Library(name, creator) {
  this.playlist = [];
  this.name = name;
  this.creator = creator;
}

function Playlist(name) {
  this.tracks = [];
  this.name = name;

  // alternative way to define "addTrack" without "prototype"
  // this.addTrack = function (track) {
  //   this.tracks.push(track);
  // };

  this.overallRating = function () {
    const sumRating = this.tracks.reduce(function(acc, val) {
      return acc + val;
    }, 0);
    return sumRating / this.tracks.length;
  };
  this.totalDuration = function () {
    return this.tracks.reduce(function(acc, val) {
      return acc + val.length;
    }, 0);
  };
}

function Track(artist, title, rating, length) {
  this.artist = artist;
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const library1 = new Library('My Library', 'Elvis');
const playlist1 = new Playlist('My Playlist');
const track1 = new Track('Adele', 'Someone like you', 4, 285);
const track2 = new Track('Michael Jackson', 'Billy Jean', 5, 294);

Library.prototype.addPlaylist = function(playlist) {
  this.playlist.push(playlist);
};

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
};

playlist1.addTrack(track1);
playlist1.addTrack(track2);
library1.addPlaylist(playlist1);

console.log('playlist1.tracks:', playlist1.tracks);
console.log('================');
console.log('track1:', track1);
console.log('================');
console.log('track2:', track2);
console.log('================');
console.log('library1:', library1);
