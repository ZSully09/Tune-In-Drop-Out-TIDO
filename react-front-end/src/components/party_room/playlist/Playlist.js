import React from 'react';
import Song from './song/Song';
import './Playlist.scss';

export default function Playlist(props) {
  return (
    <div>
      {/* ADD A FOR EACH SONG */}
      <Song />
    </div>
  );
}
