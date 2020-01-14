import React from "react";
// import classnames from 'classnames';
import "./DropDownSong.scss";
import { useToasts } from "react-toast-notifications";

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
      appearance: "success",
      autoDismiss: true
    });
    console.log(song);

    // TODO: call some callback that came in from props
    props.onSelectSong(song);
  };

  let addSongToSpotifyPlaylist = () => {
    let user_id = "1159700382";
    let playlist_id = "3a7bXfozKZeDrmjTKnSjS9";
    console.log("before adding song");
    fetch(
      `https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,
      {
        headers: {
          Authorization: `Bearer BQA1T6hFSpMmfQWIN3y6p4wenRsakp8KddatMu3TwlKOs_9VYxaCTRnJwmdk3CzzOIFxYdm55BCa9Jomwjz2dsHCUIrwcFCxgmjrnPRbib1U71CXOkDh9uZuWoyseSwonpMKtB_9ebmaKKqawh5IuMrW0_fcTr9AhoVHtYRLVIvGasthc_PwVslG8g8TdVX0VuOx6OhCjuM0avh1D0EXBoQr_N5hgQ`,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          uris: [`${props.uri}`]
        })
      }
    )
      .then(res => {
        console.log("added song to playlist", res);
      })
      .catch(error => {
        console.log("song failed to add", error);
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
