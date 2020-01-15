import React from 'react';
import classNames from 'classnames';
import { FaEllipsisV } from 'react-icons/fa';
import { IoMdThumbsUp } from 'react-icons/io';

import './Song.scss';

export default function Song(props) {
  const songDiv = classNames('div--song');
  const songThumbnail = classNames('image--song');
  const songName = classNames('div--song--name');
  const songArtist = classNames('div--song--artist');
  const upVote = classNames('button--up--vote');
  const editButton = classNames('button--edit');
  const songInfo = classNames('div--song--info');

  return (
    <div className={songDiv}>
      <div className={songThumbnail}>
        <img alt="" src={props.image}></img>
      </div>
      <div className={songInfo}>
        <div className={songName}> {props.name}</div>
        <div className={songArtist}> {props.artist}</div>
      </div>
      <button className={upVote}>
        &nbsp;&nbsp;
        <IoMdThumbsUp />
      </button>
      <button className={editButton}>
        <FaEllipsisV />
      </button>
    </div>
  );
}
