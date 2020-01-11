import React, { Component } from 'react';
import Script from 'react-load-script';
import classNames from 'classnames';
import {
  Grid,
  Typography,
  Card,
  IconButton,
  CardContent,
  CardMedia
} from '@material-ui/core';
import { MdPlayArrow, MdPause, MdSkipNext } from 'react-icons/md';

import './Player.scss';

class Player extends Component {
  constructor(props) {
    super(props);
    this.handleLoadSuccess = this.handleLoadSuccess.bind(this);
    this.handleLoadFailure = this.handleLoadSuccess.bind(this);
    this.cb = this.cb.bind(this);
    this.playerCheckInterval = null;
    this.positionCheckInterval = null;
    this.player = null;

    this.state = {
      deviceId: null,
      playingInfo: null,
      playing: false,
      positionSliderValue: 50,
      positionStamp: '00:00',
      durationStamp: '00:00'
    };
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

  checkChangePosition = () => {
    this.player.getCurrentState().then(state => {
      if (state && this.state.playing) {
        let { duration, position } = state;
        // duration = 100%
        // position = ?%
        let val = (position * 100) / duration;
        if (val !== this.state.positionSliderValue) {
          this.setState({
            positionSliderValue: val
          });
        }

        let positionStamp = this.milisToMinutesAndSeconds(state.position);
        let durationStamp = this.milisToMinutesAndSeconds(state.duration);
        this.setState({ positionStamp, durationStamp });
      }
    });
  };

  milisToMinutesAndSeconds = mil => {
    let minutes = Math.floor(mil / 60000);
    let seconds = ((mil % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  togglePlay() {
    if (this.player) {
      this.player.togglePlay();
    } else {
      console.log('no such player yet, son');
    }
  }

  playSong = song => {
    // 1 pull some data out of the song, I guess?
    let { songId } = song;
    // 2 tell spotify that this iswhat we want I guess?
    this.player.startSong(songId); // NB I totally made up that method, it proably isn't real, like your mother's love
  };

  playNext = () => {
    if (this.player && this.props.nextSong) {
      this.playSong(this.props.nextSong);
    } else {
      // TODO: what should we do if there's no next song?  like if we're at the end of the PL?
      console.log('sad trombone');
    }
  };

  toggleNext = () => {
    if (this.player) {
      this.player.nextTrack();
    } else {
      console.log('no such player yet, mon');
    }
  };

  render() {
    const player = classNames('div--player');

    return (
      <div className={player}>
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

        {/* <CardMedia
          style={{
            width: 80,
            height: 80,
            margin: 10
          }}
          image={
            this.state.playingInfo.track_window.current_track.album.images[0]
              .url
          }
          title={this.state.playingInfo.track_window.current_track.name}
        /> */}

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
