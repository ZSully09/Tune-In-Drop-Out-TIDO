import React, { Component } from 'react';
import Script from 'react-load-script';
import classNames from 'classnames';
import { MdPause, MdSkipNext } from 'react-icons/md';

import '../party_room/current_song/CurrentSong.scss';

class Player extends Component {
  constructor(props) {
    super(props);
    this.handleLoadSuccess = this.handleLoadSuccess.bind(this);
    this.handleLoadFailure = this.handleLoadSuccess.bind(this);
    this.cb = this.cb.bind(this);
    this.player = null;
  }

  componentDidMount() {
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.handleLoadSuccess();
    };
  }

  handleLoadSuccess() {
    this.setState({ scriptLoaded: true });
    console.log('Script loaded');
    const token = process.env.REACT_APP_SPOTIFY_SDK_TOKEN;
    const player = new window.Spotify.Player({
      name: 'TiDo',
      getOAuthToken: cb => {
        cb(token);
      }
    });
    this.player = player;
    console.log(player);
    // window.player = player; // TODO: REMOVE ME, FOR THE LOVE OF THINGS THAT MERIT LOVE

    // Error handling
    player.addListener('initialization_error', ({ message }) => {
      console.error(message);
    });
    player.addListener('authentication_error', ({ message }) => {
      console.error(message);
    });
    player.addListener('account_error', ({ message }) => {
      console.error(message);
    });
    player.addListener('playback_error', ({ message }) => {
      console.error(message);
    });

    // Playback status updates
    player.addListener('player_state_changed', state => {
      console.log(state);
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
  }

  cb(token) {
    return token;
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
    console.log('Script created');
  }

  handleScriptError() {
    this.setState({ scriptError: true });
    console.log('Script error');
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
    console.log('Script loaded');
  }

  togglePlay() {
    if (this.player) {
      this.player.togglePlay();
    } else {
      console.log('no such player yet, son');
    }
  }

  toggleNext = () => {
    if (this.player) {
      this.player.nextTrack();
    } else {
      console.log('no such player yet, mon');
    }
  };

  render() {
    const currentSongPlaying = classNames('div', {});

    return (
      <div className={currentSongPlaying}>
        <Script
          url="https://sdk.scdn.co/spotify-player.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />

        <img
          alt=""
          src="https://s3.amazonaws.com/factmag-images/wp-content/uploads/2019/11/Stormzy-Art-big.jpg"
        ></img>

        <div id="song">Wiley Flow</div>
        <div id="artist">Stormzy</div>
        <div id="commands">
          <MdPause
            onClick={() => {
              console.log('purple people eaters');
              this.togglePlay();
            }}
          />
          <MdSkipNext
            onClick={() => {
              console.log('pink people eaters');
              this.toggleNext();
            }}
          />
        </div>
      </div>
    );
  }
}

export default Player;
