import Vimeo from "@vimeo/player";



const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

console.log(Vimeo.Player);

// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });




// import Player from '@vimeo/player';

// const player = new Player('handstick', {
//     id: 'vimeo-player',
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });