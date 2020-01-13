import React, { useState, useEffect } from 'react';
// import classNames from 'classnames';

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
  const [player, setPlayer] = useState([]);

  const onSelectSong = song => {
    setTerm('');
    console.log('song added ', song);
    setPlaylist([...playlist, song]);
    setPlayer([...player, songs[0]]);
  };

  let songs = playlist.map(song => {
    // console.log('props', props);
    return (
      <Song
        id={song.uri}
        name={song.songName}
        artist={song.songArtist}
        image={song.songThumbnail}
      ></Song>
    );
  });
  // console.log('current song list', songs);
  useEffect(() => {
    if (!term) {
      setResults([]);
      return;
    }

    // console.log(term);
    // hardcoded for test, eventually comes from db

    const token =
      'BQB3qtltDivkpCDSLBOty8z4rFLTeOYQNFvewAgUraCUfO1drtxtiWgSPUuBViNjP_M1-hY_nIOnXjqJbUATZpKxq4XPKxr16WZoOzFC5mIl1gAzpgxGcAhtmeQavFLbb0S_0w0OjTh0hJRb1DfR52rrC6q_SJXTVIM99HiwmjTl7BgfYeEOo6scCjy_';

    axios(`	https://api.spotify.com/v1/search?q=${term}&type=track&limit=7 `, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(term => setResults(term.data.tracks.items))
      .catch(err => console.log(err));
  }, [term]);
  // console.log(results);
  return (
    <main>
      <Header onSearch={setTerm} term={term} />
      <Results results={results} onSelectSong={onSelectSong} />

      <div className="playlist">{songs}</div>

      <footer>
        <Player
          currSong={{ some: 'snit' }}
          setCurrSong={() => {}}
          nextSong={playlist[0]}
        />
      </footer>
    </main>
  );
}
