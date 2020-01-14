import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Join.scss";
import SpotifyLogin from "react-spotify-login";
import accessToken from "../create/Create";

class Join extends React.Component {
  constructor() {
    super();
    this.state = {
      accessToken: ""
    };
  }

  onSubmitpartyName = () => {
    const partyName = classNames("input--party--name");

    // let playlist_id = partyName;
    // let partyName = playlist_id;
    fetch(`https://api.spotify.com/v1/me/playlists/${partyName}`, {
      headers: {
        Authorization: `Bearer ${this.state.accessToken}`,
        "Content-Type": "application/json"
      },
      method: "GET",
      body: JSON.stringify({
        name: this.state.name,
        public: true
      })
    }).then(checkPlaylistExists);
    function checkPlaylistExists(res) {
      if (res.status >= 200 || res.status < 300) {
        console.log("join party", res);
        return res;
      } else {
        let err = new Error(res.statusText);
        err.response = res;
        throw err;
      }
    }
  };

  render() {
    const createPartyForm = classNames("form--party");
    const partyName = classNames("input--party--name");
    const createNewPartyButton = classNames("button--create--new");

    return (
      <main>
        <h3> Join a Party </h3>
        <form className={createPartyForm}>
          <input className={partyName} placeholder="Party Name"></input>

          <Link to="/{partyName}">
            <button className={createNewPartyButton}> Join Party </button>
          </Link>
        </form>
      </main>
    );
  }
}

export default Join;
