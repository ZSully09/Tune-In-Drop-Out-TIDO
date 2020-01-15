import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Join.scss";

class Join extends React.Component {
  constructor() {
    super();
    this.state = {
      accessToken: ""
    };
  }

  onSubmitpartyName = () => {
    // HARD-CODED ids
    // PLAYLIST NAME = Curdle-Fetus-Chesterfield
    let user_id = "1159700382";
    let playlist_id = "2B9yx6aJsB9hpCvUrnWpQJ";

    fetch(
      `https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_OAUTH}`,
          "Content-Type": "application/json"
        },
        method: "GET",
        body: JSON.stringify({
          name: this.state.name,
          public: true
        })
      }
    )
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

          <Link to={`/party/${this.state.partyName}`}>
            <button className={createNewPartyButton}> Join Party </button>
          </Link>
        </form>
      </main>
    );
  }
}

export default Join;
