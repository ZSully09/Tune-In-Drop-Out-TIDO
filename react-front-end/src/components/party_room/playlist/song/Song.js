import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { FaEllipsisV } from 'react-icons/fa';
import { IoMdThumbsUp } from 'react-icons/io';

import './Song.scss';

export default function Song(props) {
  const songDiv = classNames('div--song');
  const songThumbnail = classNames('image--song');
  const songName = classNames('div--song--name');
  const songArtist = classNames('div--song--artist');
  // const voteSong = classNames('div--vote--song');
  const upVote = classNames('button--up--vote');
  const editButton = classNames('button--edit');
  const songInfo = classNames('div--song--info');

  // TEST AXIOS CALL
  // useEffect(() => {
  //   axios.get('/api/track').then(res => setState(res.data));
  // }, []);
  // console.log(props.image);
  const [state, setState] = useState('');
  return (
    <div className={songDiv}>
      <div className={songThumbnail}>
        <img src={props.image}></img>
      </div>
      <div className={songInfo}>
        <div className={songName}> {props.name}</div>
        <div className={songArtist}> {props.artist}</div>
      </div>
      {/* <div className={voteSong}> */}
      <button className={upVote}>
        &nbsp;&nbsp;
        <IoMdThumbsUp />
      </button>
      {/* </div> */}
      <button className={editButton}>
        <FaEllipsisV />
      </button>
    </div>
  );
}
