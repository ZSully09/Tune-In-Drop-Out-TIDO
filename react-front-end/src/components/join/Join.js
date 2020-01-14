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

    let playlist_id = "3a7bXfozKZeDrmjTKnSjS9";
    // let partyName = playlist_id;
    fetch(`https://api.spotify.com/v1/me/playlists/${playlist_id}`, {
      headers: {
        Authorization: `Bearer BQA1T6hFSpMmfQWIN3y6p4wenRsakp8KddatMu3TwlKOs_9VYxaCTRnJwmdk3CzzOIFxYdm55BCa9Jomwjz2dsHCUIrwcFCxgmjrnPRbib1U71CXOkDh9uZuWoyseSwonpMKtB_9ebmaKKqawh5IuMrW0_fcTr9AhoVHtYRLVIvGasthc_PwVslG8g8TdVX0VuOx6OhCjuM0avh1D0EXBoQr_N5hgQ`,
        "Content-Type": "application/json"
      },
      method: "GET",
      body: JSON.stringify({
        name: this.state.name,
        public: true
      })
    })
      .then(res => {
        console.log("create party", res);
      })
      .catch(error => {
        console.log("create failed", error);
      });
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

          <Link to="/${playlist_id}">
            {/* <Link to="/${partyName}"> */}

            <button className={createNewPartyButton}> Join Party </button>
          </Link>
        </form>
      </main>
    );
  }
}

export default Join;
