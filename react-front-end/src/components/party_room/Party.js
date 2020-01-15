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
        key={song}
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

    const token = process.env.REACT_APP_SPOTIFY_SDK_TOKEN;

    // SDK Token
    // const token =
    //   'BQC9LCCfTdoIJ0cCYkyZa3KpFEOlgMpWuMMvGVT6VoI84J26ADuePPtzv8S8ZmNUgkK6irc8EbDwvWJmv6zAP_8_js-8ih3pL3bfK9Ynwes0gpXi1FxuJIZxKENSMJo7qzPWoX4_AKiLb4eMfPxNhIzc_UuYl_rrWbqZKeGZXgMf2p4EvozYk3CFHO4F';

    axios(`	https://api.spotify.com/v1/search?q=${term}&type=track&limit=7 `, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(term => setResults(term.data.tracks.items))
      .catch(err => console.log(err));
  }, [term]);
  // console.log(results);

  let getSongsFromSpotifyPlaylist = () => {
    // let playlist_id = `${process.env.REACT_APP_SPOTIFY_PLAYLIST_ID}`;
    let playlist_id = '0kOGmEeNnHjF7EClZAKC9z';
    // console.log('before adding song');
    axios(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
      headers: {
        // OAuth Token
        Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_OAUTH}`,
        // Authorization: `Bearer BQC_YBs2eeh3Y0KLlXVv2IHcbfP4DOFj-0gMoBkKpb0gHey7Nm88DmHBj4b9DgtJp4SR7O8-0Z7dFDbUwcPJqIamqDXWpYi360kjJ6mRvLW6wi9E3mvPtDEa3aWDT0n7ae85HnBsn4DU457Izy900Sj-dFAV4TUeECBiycD2cXlUKPxI_0fU4dkUd9N8h3VbIeOvpMOzbM_77InkH2TwDS66pzzhcDYGWpCLOzPGxrEhdOZQJJ-LC3kriEC9YnI`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(res => {
        const songs = res.data.items.map(item => {
          return {
            uri: item.track.uri,
            songName: item.track.name,
            songArtist: item.track.artists[0].name,
            songThumbnail: item.track.album.images[2].url
          };
        });
        setPlaylist(songs);
        console.log('songs received from spotify', res);
      })
      .catch(error => {
        console.log('songs failed to be received from spotify', error);
      });
  };

  useEffect(() => {
    getSongsFromSpotifyPlaylist();
  }, []);

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
