import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Header from './header/Header';
import Song from './playlist/song/Song';
import Player from '../Player/Player';
import './Party.scss';
import Results from './search_bar/Results';

import axios from 'axios';

export default function Party(props) {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    if (!term) {
      setResults([]);
      return;
    }

    // hardcoded for test, eventually comes from db
    const token =
      'BQAawuwCksE-S5-ML_A3ml6Sh8Hr6AcyUOQ8IyMTqUZOG_1x5ODf0yDI17V5AJihz78dH8V2WYlpT6itVbcd3jWrgWFiPKWHLMKJN84sJklFZA-mwdUBFw0xfrSUEG6dUvOV7yGziUw4X2ccKJ-jubWvSZ6XdnwBGqSbRJUPhkLMpa3PDGR0n3Y';

    axios(`	https://api.spotify.com/v1/search?q=${term}&type=track&limit=5 `, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(term => setResults(term.data.tracks.items))
      .catch(err => console.log(err));
  }, [term]);

  return (
    <main>
      <Header onSearch={setTerm} />
      <Results results={results} />

      <div className="playlist">
        <Song />
      </div>

      <footer>
        <Player />
      </footer>
    </main>
  );
}
