import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import SpotifyLogin from 'react-spotify-login';
import classNames from 'classnames';
import './Login.scss';
class LoginPage extends Component {
  onSubmit = () => {
    // if (userFound) {
    return <Redirect to="/" />;
    // }
  };

  constructor(props) {
    super(props);
    this.state = { redirectToUserPage: false };
  }

  render() {
    const onSuccess = response => {
      console.log(response);
      this.setState({ redirectToUserPage: true });
    };
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
      return <Redirect to="/" />;
    }

    const login = classNames('form--login');
    const email = classNames('input--email');
    const password = classNames('input--password');
    const loginButton = classNames('button--login');
    const spotifyLoginButton = classNames('button--spotify--login');

    return (
      <div className="login-page">
        <h1>TiDo</h1>
        <section className="login-form">
          <form className={login}>
            <input type="email" className={email} placeholder="Email"></input>
            <input
              type="password"
              className={password}
              placeholder="Password"
            ></input>
            <Link to="/">
              <button className={loginButton} onClick={this.onSubmit}>
                Login
              </button>
            </Link>
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
          </form>
        </section>
        <div>
          Don't have an account? Create one&nbsp;
          <a href="http://localhost:3000/register">
            <u>here!</u>
          </a>
        </div>
      </div>
    );
  }
}
export default LoginPage;
