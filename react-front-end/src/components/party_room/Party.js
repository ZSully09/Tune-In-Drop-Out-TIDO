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
      'BQCcGSnT12wXtf8p-EyE4aIVw0lYEUtR9U4oH5AaQd-APQeE0jZQrCgkosD7UMlEX-lOPePJIUCSP9hwJP7zfuShLkQFt4XxGotJWPgr2tYoQxVpWnC7L8B3eUYqSZfL45ppizzlz-fns9ts4CV5eTzJ-7pJlkhvQ06yUNVpiguipoGValuIwZqq6aIo';

    axios(`	https://api.spotify.com/v1/search?q=${term}&type=track&limit=7 `, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(term => setResults(term.data.tracks.items))
      .catch(err => console.log(err));
  }, [term]);
  // console.log(results);

  //new function for setting playlist
  const updatePlayist = next_tracks => {
    //store in playlist state
  };
  return (
    <main>
      <Header onSearch={setTerm} term={term} />
      <Results results={results} onSelectSong={onSelectSong} />

      <div className="playlist">{songs}</div>

      <footer>
        <Player
        // updatePlaylist={updatePlayist}
        // currSong={{ some: 'snit' }}
        // setCurrSong={() => {}}
        // nextSong={playlist[0]}
        />
      </footer>
    </main>
  );
}
