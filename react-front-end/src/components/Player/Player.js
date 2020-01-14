import React, { useState, useEffect } from 'react';
import Script from 'react-load-script';
import classNames from 'classnames';
import { MdPlayArrow, MdPause, MdSkipNext } from 'react-icons/md';
import './Player.scss';
// const Player = ({
//     current_track,
//     playlist,
//     isPause
// }) => (
//     <ul>
//         ...
//     </ul>
// )
// Player.propsTypes = {
//     current_track: PropType.shape({
//         id: PropType.string
//     })
// }

const token = process.env.REACT_APP_SPOTIFY_SDK_TOKEN;

const Player = () => {
  const [player, setPlayer] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setLoading(true);

    window.onSpotifyWebPlaybackSDKReady = () => {
      setLoading(false);

      const player = new window.Spotify.Player({
        name: 'TiDo',
        getOAuthToken: cb => {
          cb(token);
        }
      });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      player.addListener('player_state_changed', state => {
        console.log('currentTrack', currentTrack);
        setCurrentTrack(state.track_window.current_track);
        console.log('current track artists', state.track_window.currentTrack);
      });

      player.connect();

      setPlayer(player);
    };
  }, []);

  const playerDiv = classNames('div--player');

  const togglePlay = () => {
    if (player) {
      player.togglePlay();
    } else {
      console.log('no such player yet, son');
    }
  };

  const toggleNext = () => {
    if (player) {
      player.nextTrack();
    } else {
      console.log('no such player yet, mon');
    }
  };

  return (
    <div className={playerDiv}>
      <Script url="https://sdk.scdn.co/spotify-player.js" />

      {/* <img alt="" src={currentTrack.album.images[2].url}></img> */}

      <div>
        <div id="song">{currentTrack.name}</div>
        {/* <div id="artist">{currentTrack.artists[0].name}</div> */}
      </div>
      <div id="commands">
        <MdPlayArrow
          onClick={() => {
            console.log('purple people eaters Playing');
            togglePlay();
          }}
        />
        <MdPause
          onClick={() => {
            console.log('purple people eaters Pausing');
            togglePlay();
          }}
        />
        <MdSkipNext
          onClick={() => {
            console.log('pink people eaters Skipping');
            toggleNext();
          }}
        />
      </div>
    </div>
  );
};
export default Player;
