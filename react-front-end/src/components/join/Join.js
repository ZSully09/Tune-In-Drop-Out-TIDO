import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Join.scss';

class Join extends React.Component {
  constructor() {
    super();
    this.state = {
      accessToken: '',
      partyName: ''
    };
  }

  onSubmitpartyName = () => {
    // HARD-CODED ids
    // PLAYLIST NAME = Curdle-Fetus-Chesterfield
    let user_id = 'zsullivan93';
    let playlist_id = '67RGne4x0phkFq3sQfzzYJ';

    fetch(
      `https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_OAUTH}`,
          'Content-Type': 'application/json'
        },
        method: 'GET',
        body: JSON.stringify({
          name: this.state.name,
          public: true
        })
      }
    )
      .then(res => {
        console.log('create party', res);
      })
      .catch(error => {
        console.log('create failed', error);
      });
  };

  handlePartyNameChange = event => {
    this.setState({
      partyName: event.target.value
    });
  };

  render() {
    const createPartyForm = classNames('form--party');
    const partyName = classNames('input--party--name');
    const createNewPartyButton = classNames('button--create--new');
    console.log(this.state.partyName);
    return (
      <main>
        <h3> Join a Party </h3>
        <form className={createPartyForm}>
          <input
            className={partyName}
            placeholder="Party Name"
            onChange={this.handlePartyNameChange}
          ></input>

          <Link to={`/party/${this.state.partyName}`}>
            <button className={createNewPartyButton}> Join Party </button>
          </Link>
        </form>
      </main>
    );
  }
}

export default Join;
