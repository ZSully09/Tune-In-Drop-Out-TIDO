import React from 'react';
import classNames from 'classnames';
import { MdPlayArrow, MdPause, MdSkipNext } from 'react-icons/md';

import './CurrentSong.scss';

export default function CurrentSongNone(props) {
  const currentSongNone = classNames('div', {
    playing: props.none
  });
  return (
    <div className={currentSongNone}>
      <div id="artist"></div>
      <div id="song"></div>
      <div id="commands"></div>
    </div>
  );
}
