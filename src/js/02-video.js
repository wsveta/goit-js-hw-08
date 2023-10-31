
import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  _.throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));