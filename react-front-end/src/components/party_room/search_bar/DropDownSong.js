import React from 'react';
// import classnames from 'classnames';
import './DropDownSong.scss';
import { useToasts } from 'react-toast-notifications';

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
    console.log(song);

    // TODO: call some callback that came in from props
    props.onSelectSong(song);
  };

  let addSongToSpotifyPlaylist = () => {
    let user_id = 'zsullivan93';
    let playlist_id = '2MW9g98a7uVTvgOw8b93ks';
    console.log('before adding song');
    fetch(
      `https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,
      {
        headers: {
          Authorization: `Bearer BQBhC-GYW1xEzUyVSO-MEqUuMkUSPjgq9ZN2q-zDZsfZ19-nBNnO26wSBxsQMxNRqUUQTlKgv4zkaiKF-FVuW6elS9BYfO79NJs9-0uBwgJ0uRYHzdl1KiTNh59UOx0FDugxjwXxEEUwlAqJLFTCI3fJLArqhjsgvSMQIY2UphWAg2VKwjuC4CogRFPwok-dOkw7Kq_9xqCA1HIGvb2r4Ff6DsYl_S2Fl3MIj12P2cMGTrfKgqKWMpgmIPPP08w`,
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
    <div className="results" onClick={addSongToSpotifyPlaylist}>
      <div className="song" onClick={setSong}>
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
