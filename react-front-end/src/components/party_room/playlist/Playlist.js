import React from 'react';
import classNames from 'classnames';
import Header from '../header/Header';
import CurrentSongNone from '../current_song/CurrentSongNone';
import CurrentSongPaused from '../current_song/CurrentSongPaused';
import CurrentSongPlaying from '../current_song/CurrentSongPlaying';
import Song from './song/Song';
import './Playlist.scss';

export default function Playlist(props) {
  return (
    <main>
      <Header />
      <h3>Party</h3>
      <Song />
      <footer>
        <CurrentSongPlaying />
      </footer>
    </main>
  );
}
