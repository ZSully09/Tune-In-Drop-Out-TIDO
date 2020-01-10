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

  const onSelectSong = (song) => {
    setTerm('');

    setPlaylist([...playlist, song]);
  }

  useEffect(() => {
    if (!term) {
      setResults([]);
      return;
    }
       
    console.log(term);
    // hardcoded for test, eventually comes from db
    const token = 'BQAD1R3ZPhMTTvwxtYmL7QedCzSf4KQT3CQdNpNxgdWO1sH9NO88Mnkk19nQoPcMNjc1hIAlQ6s1I9Vig1_yIswsniUXZa2kh767wgGRacAX353zmUQk3Z9Akw1gJIOxFKaMsr16sCaKTbXPnpDBb54RvGD4M8b1alt_K18KwAYuBvma_znoWjI'
    
    axios(`	https://api.spotify.com/v1/search?q=${term}&type=track&limit=5 `,
    {
      headers: {Authorization: `Bearer ${token}`}
    }).then(term => setResults(term.data.tracks.items))
    .catch(err => console.log(err))
  }, [term]);
  console.log(results);
  return (
    <main>
      <Header onSearch={setTerm} term={term} />
      <Results results={results} onSelectSong={onSelectSong} />

      <div className="playlist">
        <Song />
      </div>

      <footer>
        <Player />
      </footer>
    </main>
  );
}
