import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Script from "react-load-script";
import Home from "./components/home/Home";
// import Create from './components/Create';
// import Party from './components/Party';
import Login from "./components/login/Login";
import Register from "./components/registration/Registration";
import Create from "./components/create/Create";
import Party from "./components/party_room/Party";
import Join from "./components/join/Join";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoadSuccess = this.handleLoadSuccess.bind(this);
    this.handleLoadFailure = this.handleLoadSuccess.bind(this);
    this.cb = this.cb.bind(this);
  }

  componentDidMount() {
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.handleLoadSuccess();
    };
  }

  handleLoadSuccess() {
    this.setState({ scriptLoaded: true });
    console.log("Script loaded");
    const token = process.env.REACT_APP_SPOTIFY_SDK_TOKEN;
    const player = new window.Spotify.Player({
      name: "TiDo",
      getOAuthToken: cb => {
        cb(token);
      }
    });
    console.log(player);

    // fetchData = () => {
    //   axios
    //     .get('/api/data') // You can simply make your requests to "/api/whatever you want"
    //     .then(response => {
    //       // handle success
    //       console.log(response.data); // The entire response from the Rails API

    //       console.log(response.data.message); // Just the message
    //       this.setState({
    //         message: response.data.message
    //       });
    //     });
    // };

    // Error handling
    player.addListener("initialization_error", ({ message }) => {
      console.error(message);
    });
    player.addListener("authentication_error", ({ message }) => {
      console.error(message);
    });
    player.addListener("account_error", ({ message }) => {
      console.error(message);
    });
    player.addListener("playback_error", ({ message }) => {
      console.error(message);
    });

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
  }

  cb(token) {
    return token;
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
    console.log("Script created");
  }

  handleScriptError() {
    this.setState({ scriptError: true });
    console.log("Script error");
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
    console.log("Script loaded");
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Script
              url="https://sdk.scdn.co/spotify-player.js"
              onCreate={this.handleScriptCreate.bind(this)}
              onError={this.handleScriptError.bind(this)}
              onLoad={this.handleScriptLoad.bind(this)}
            />
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/create" component={Create} />
            <Route path="/party" component={Party} />
            <Route path="/join" component={Join} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
