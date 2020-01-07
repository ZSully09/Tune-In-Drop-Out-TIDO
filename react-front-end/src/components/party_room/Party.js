import React from 'react';
import classNames from 'classnames';
import Header from './header/Header';
import CurrentSongNone from './current_song/CurrentSongNone';
import CurrentSongPaused from './current_song/CurrentSongPaused';
import CurrentSongPlaying from './current_song/CurrentSongPlaying';
import Song from './playlist/song/Song';
import './Party.scss';

export default function Party(props) {
  return (
    <main>
      <Header />
      <div>
        <Song />
      </div>
      <footer>
        {/* IF SONG IS PLAYING */}
        <CurrentSongPlaying />
        {/* IF SONG IS PAUSED 
        <CurrentSongPaused /> */}
        {/* IF THERE IS NO CURRENT SONG
        <CurrentSongNone /> */}
      </footer>
    </main>
  );
}
