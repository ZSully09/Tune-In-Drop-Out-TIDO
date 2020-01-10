import React from 'react';
// import classNames from 'classnames';
import Header from './header/Header';
import Song from './playlist/song/Song';
import Player from '../Player/Player';
import './Party.scss';

export default function Party(props) {
  return (
    <main>
      <Header />
      <div>
        <Song />
      </div>
      <footer>
        <Player />
      </footer>
    </main>
  );
}
