import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import makePartyName from '../../helpers/names';
import SpotifyLogin from 'react-spotify-login';
// import accessToken from "../login/Login";
import './Create.scss';
// import { AuthContext } from '../../OLD -- context/auth';

// console.log(accessToken);

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createPartyForm: '',
      name: makePartyName(),
      redirectToUserPage: false,
      accessToken: ''
    };
  }

  // onPartyChange = event => {
  //   this.setState({ createPartyForm: event.target.value });
  // };

  onSubmitcreatePartyForm = () => {
    let user_id = 'zsullivan93';
    console.log('before');
    fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
      headers: {
        // OAuth Token
        Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_OAUTH}`,
        // Authorization: `Bearer BQCLbeWYurFBPEsAJfSfz2aO7j5qW796rae44LD2S_sMd3NLcd7NFxxt3tzelmYjwUAAFFJKhn7poggfCJ89avplJHVdPILLw1zitmrhLUDGPIqkevMvPZvV7ohd4XhiX0RSjs5Rm0hJTbQ1Xv858eAszZbAbgUkJodkD5Cp5JJSF_g1MftZ7lByjufrMp_pUoCbBDKwMTS1vWoGRdj2ly754kAxDY68nmko16M1kG-jiEG2L-nQlKA4By3ZuH0`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        public: true
      })
    })
      .then(res => {
        console.log('create party', res);
      })
      .catch(error => {
        console.log('create failed', error);
      });
    // console.log('name', this.state.name);
    // console.log(this.state);
    // this.props.onRouteChange('/party');
  };

  render() {
    const createPartyForm = classNames('formn--party');
    const partyName = classNames('input--party--name');
    const createNewPartyButton = classNames('button--create--new');

    const onSuccess = response => {
      let accessToken = response.access_token;
      console.log(accessToken);
      this.setState({
        redirectToUserPage: true,
        accessToken: response.access_token
      });
    };
    console.log(this.state.accessToken);
    const onFailure = response => console.error(response);
    const buttonText = (
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
          alt="login-logo"
        />
        &nbsp;&nbsp;<span>Login with Spotify</span>
      </div>
    );
    if (this.state.redirectToUserPage === true) {
      return <Link to="/" />;
    }

    // const login = classNames("form--login");
    // const email = classNames("input--email");
    // const password = classNames("input--password");
    // const loginButton = classNames("button--login");
    const spotifyLoginButton = classNames('button--spotify--login');

    // const setParty = () => {
    //   const party = {
    //     partyName: props.makePartyName
    //   };
    //   addToast(`${song.songName} was added to the playlist`, {
    //     appearance: 'success',
    //     autoDismiss: true
    //   });
    //   console.log(song);

    //   // TODO: call some callback that came in from props
    //   props.onSelectSong(song);
    // };

    console.log('nnnnn', this.state.name);

    return (
      <main>
        <h3> Create a New Party </h3>
        <form className={createPartyForm}>
          <input
            className={partyName}
            type="text"
            defaultValue={this.state.name}
          ></input>
          <Link to={`/party/${this.state.name}`}>
            <button
              onClick={this.onSubmitcreatePartyForm}
              className={createNewPartyButton}
            >
              New Party
            </button>
          </Link>
          <div>
            <Link to="/">
              <SpotifyLogin
                type="button"
                className={spotifyLoginButton}
                buttonText={buttonText}
                clientId={process.env.REACT_APP_SPOTIFY_CLIENT_ID}
                redirectUri={process.env.REACT_APP_SPOTIFY_REDIRECT_URI}
                scope={process.env.REACT_APP_SPOTIFY_SCOPE}
                onSuccess={onSuccess}
                onFailure={onFailure}
              />
            </Link>
          </div>
        </form>
      </main>
    );
  }
}

export default Create;
