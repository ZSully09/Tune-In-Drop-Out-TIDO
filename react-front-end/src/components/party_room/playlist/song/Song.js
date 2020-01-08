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
  const voteSong = classNames('div--vote--song');
  const upVote = classNames('button--up--vote');
  const editButton = classNames('button--edit');

  // TEST AXIOS CALL
  useEffect(() => {
    axios.get('/api/track').then(res => setState(res.data));
  }, []);

  const [state, setState] = useState('');
  return (
    <div className={songDiv}>
      <div className={songThumbnail}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Joyner_Debut_Album.jpg/220px-Joyner_Debut_Album.jpg"></img>
      </div>
      <div className={songName}>Ultra Sound</div>
      <div className={songArtist}>Joyner Lucas</div>
      <div className={voteSong}>
        <button className={upVote}>
          # &nbsp;&nbsp;
          <IoMdThumbsUp />
        </button>
      </div>
      <button className={editButton}>
        <FaEllipsisV />
      </button>
      <p>{state}</p>
    </div>
  );
}
