import React from "react";
import classnames from "classnames";
import './DropDownSong.scss'
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
    }
    addToast(`${song.songName} was added to the playlist`, {appearance: 'success', autoDismiss: true});
    console.log(song);

    // TODO: call some callback that came in from props
    props.onSelectSong(song);
  }

  return (
    <article className="song" onClick={setSong}> 
      <img className="song__thumbnail" src={props.album.images[2].url}/>
      <div className="song__info">
        <div className="song__name">{props.name}</div>
        <div className="song__artist">{props.artists[0].name}</div>
        <div className="song__album">{props.album.name}</div>
      </div>
    </article>
  );
}

