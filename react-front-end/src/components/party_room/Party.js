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
    // console.log('song added ', song);
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
      'BQB13MS4M68lIgXNTkDSUxx0suclrEcbOjjsVx5PipopEhKqhl2lNNZLh6Q14RZB3y4LagO44eubl2Y6A958ou9jkfbmxJcWCaLrZmwbBKSRVO6cne6bQSVIqDmFjHyVGI6JYjApk2iS3BCFFUCPlhBIV8CKqdwu0CAC_qWY70nvt-Ny-F6cO6_rjUs3';

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
