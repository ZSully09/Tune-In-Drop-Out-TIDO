import React, { Component } from 'react';

class MusicPlayer extends Component {
  constructor(props) {
      super(props);

      checkForPlayer = () => {
        const token = this.props.user.access_token;

        if (window.Spotify) {
            clearInterval(this.playerCheckInterval);
            this.player = new window.Spotify.Player({
                name: "Tido Spotify App",
                getOAuthToken: cb => {
                    cb(token);
                }
            });
        }

        if (this.player) {
            this.createEventHandlers();

            this.player.connect();
        }
    };


// window.onSpotifyWebPlaybackSDKReady = () => {
//   const token =
//     "BQBZeRHpYOrVYruVGqWfw-BQAUIqEKfZpH3gITzNGqrEYOct6XGvRhFKPIpRtvg7Le_0g6w1Dh2q9UiazUYUz9gfiN3QCu0lhTNtMwIjfVg5kErRQ_LoWr3Agm-q5ZhR-BQAUIqEKfZpH3gITzNGqrEYOct6XGvRhFKPIpRtvg7Le_0g6w1Dh2q9UiazUYUz9gfiN3QCu0lhTNtMwIjfVg5kErRQ_LoWr3Agm-q5ZhR-F0fn4smPyF5i7jg3gOncV64dkA6GSfyl5J8n4H8oIVGbMLRgS9lk-sLRp6LldpgfQwlfJUApepzTjUfo-sLRp6LldpgfQwlfJUApepzTjUfo";
//   const player = new Spotify.Player({
//     name: "Web Playback SDK Quick Start Player",
//     getOAuthToken: cb => {
//       cb(token);
//     }
//   });


// Error handling
createEventHandlers = () => {
  this.player.on('initialization_error', e => {
      console.error('Initialization error ', e);
      this.setState({ player_init_error: true });
  });
  this.player.on('authentication_error', e =>
      console.error('Authentication error ', e)
  );
  this.player.on('account_error', e =>
      console.error('Account error ', e)
  );
  this.player.on('playback_error', e =>
      console.error('Playback error ', e)
  )


  // // Error handling
  // player.addListener("initialization_error", ({ message }) => {
  //   console.error(message);
  // });
  // player.addListener("authentication_error", ({ message }) => {
  //   console.error(message);
  // });
  // player.addListener("account_error", ({ message }) => {
  //   console.error(message);
  // });
  // player.addListener("playback_error", ({ message }) => {
  //   console.error(message);
  // });



  // Playback status updates
  player.addListener("player_state_changed", state => {
    console.log(state);
  });

  // Ready
  player.addListener("ready", ({ device_id }) => {
    console.log("Ready with Device ID", device_id);
  });

  // Not Ready
  player.addListener("not_ready", ({ device_id }) => {
    console.log("Device ID has gone offline", device_id);
  });

  // Connect to the player!
  player.connect();
};
