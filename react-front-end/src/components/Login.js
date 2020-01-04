import React from 'react';
import classNames from 'classnames';
import './Login.scss';

export default function Login(props) {
  const login = classNames('form--login');
  const email = classNames('input--email');
  const password = classNames('input--password');
  const loginButton = classNames('button--login');
  const loginViaSpotifyButton = classNames('button--spotify--login');
  return (
    <main>
      <h3> TiDo Login </h3>
      {/* Add action, method="POST" to the form */}
      <form className={login}>
        <input className={email} placeholder="Email"></input>
        <input className={password} placeholder="Password"></input>
      </form>
      <button className={loginButton}> Login</button>
      <button className={loginViaSpotifyButton}> Login with Spotify</button>
    </main>
  );
}
