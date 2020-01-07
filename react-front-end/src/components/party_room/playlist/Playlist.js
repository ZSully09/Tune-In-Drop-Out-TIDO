import React from 'react';
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
