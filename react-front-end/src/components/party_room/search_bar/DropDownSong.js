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
    let user_id = '1159700382';
    let playlist_id = '2B9yx6aJsB9hpCvUrnWpQJ';
    console.log('before adding song');
    fetch(
      `https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,
      {
        headers: {
          // OAuth Token
          Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_OAUTH}`,
          // Authorization: `Bearer BQC_YBs2eeh3Y0KLlXVv2IHcbfP4DOFj-0gMoBkKpb0gHey7Nm88DmHBj4b9DgtJp4SR7O8-0Z7dFDbUwcPJqIamqDXWpYi360kjJ6mRvLW6wi9E3mvPtDEa3aWDT0n7ae85HnBsn4DU457Izy900Sj-dFAV4TUeECBiycD2cXlUKPxI_0fU4dkUd9N8h3VbIeOvpMOzbM_77InkH2TwDS66pzzhcDYGWpCLOzPGxrEhdOZQJJ-LC3kriEC9YnI`,
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
