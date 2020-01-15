import React from 'react';
// import classnames from 'classnames';
import './DropDownSong.scss';
import { useToasts } from 'react-toast-notifications';

import { songAdd } from '../../../socketManager.js';

export default function DropDownSong(props) {
  const { addToast } = useToasts();

  const setSong = () => {
    const song = {
      songId: props.uri,
      songName: props.name,
      songArtist: props.artists[0].name,
      songAlbum: props.album.name,
      songThumbnail: props.album.images[2].url
    };
    addToast(`${song.songName} was added to the playlist`, {
      appearance: 'success',
      autoDismiss: true
    });

    songAdd(song, props.partyName);

    // TODO: call some callback that came in from props
    props.onSelectSong(song);
  };

  let addSongToSpotifyPlaylist = () => {
    let user_id = 'zsullivan93';
    let playlist_id = '0kOGmEeNnHjF7EClZAKC9z';
    console.log('before adding song');
    fetch(
      `https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,
      {
        headers: {
          // OAuth Token
          Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_OAUTH}`,
          // Authorization: `Bearer BQCLbeWYurFBPEsAJfSfz2aO7j5qW796rae44LD2S_sMd3NLcd7NFxxt3tzelmYjwUAAFFJKhn7poggfCJ89avplJHVdPILLw1zitmrhLUDGPIqkevMvPZvV7ohd4XhiX0RSjs5Rm0hJTbQ1Xv858eAszZbAbgUkJodkD5Cp5JJSF_g1MftZ7lByjufrMp_pUoCbBDKwMTS1vWoGRdj2ly754kAxDY68nmko16M1kG-jiEG2L-nQlKA4By3ZuH0`,
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          uris: [`${props.uri}`]
        })
      }
    )
      .then(res => {
        console.log('added song to playlist', res);
      })
      .catch(error => {
        console.log('song failed to add', error);
      });
  };

  return (
    <div className="results">
      <div
        className="song"
        onClick={() => {
          setSong();
          addSongToSpotifyPlaylist();
        }}
      >
        <img
          className="song__thumbnail"
          alt=""
          src={props.album.images[2].url}
        />
        <div className="song__info">
          <div className="song__name">{props.name}</div>
          <div className="song__artist">{props.artists[0].name}</div>
          <div className="song__album">{props.album.name}</div>
        </div>
      </div>
    </div>
  );
}
