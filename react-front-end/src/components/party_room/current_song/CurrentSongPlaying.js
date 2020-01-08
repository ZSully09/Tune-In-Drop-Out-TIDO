import React from 'react';
import classNames from 'classnames';
import { MdPause, MdSkipNext } from 'react-icons/md';

import './CurrentSong.scss';

export default function CurrentSongPlaying(props) {
  const currentSongPlaying = classNames('div', {
    playing: props.playing
  });
  return (
    <div className={currentSongPlaying}>
      <img
        alt=""
        src="https://s3.amazonaws.com/factmag-images/wp-content/uploads/2019/11/Stormzy-Art-big.jpg"
      ></img>

      <div id="song">Wiley Flow</div>
      <div id="artist">Stormzy</div>
      <div id="commands">
        <MdPause />
        <MdSkipNext />
      </div>
    </div>
  );
}
