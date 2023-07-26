import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

// time from  localStorage//
player.on('timeupdate', throttle((event) => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));

//  time from localStorage continue//
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}