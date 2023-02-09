// import Playrs from './../../node_modules/@vimeo/player/src/player';
import Playrs from 'player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
