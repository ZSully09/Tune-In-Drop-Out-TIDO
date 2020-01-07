import React from "react";
import classnames from "classnames";
import './Song.scss'

export default function Song(props) {
  console.log(props)


  return (
    // needs an onClick in article tag
    <article className="song" onClick={sendToPlaylist}> 
      <img className="song__thumbnail" src={props.album.images[2].url}/>
      <div className="song__info">
        <div className="song__name">{props.name}</div>
        <div className="song__artist">{props.artists[0].name}</div>
        <div className="song__album">{props.album.name}</div>
      </div>
    </article>
  );
}

