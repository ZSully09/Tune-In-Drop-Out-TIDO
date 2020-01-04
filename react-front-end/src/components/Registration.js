import React from 'react';
import classNames from 'classnames';
import './Registration.scss';

export default function Register(props) {
  const register = classNames('form--register');
  const email = classNames('input--email');
  const password = classNames('input--password');
  const passwordConfirmation = classNames('input--password--confirmation');
  const createAccountButton = classNames('button--create--account');
  // const loginViaSpotifyButton = classNames('button--spotify--login');
  return (
    <main>
      <h3> TiDo Registration </h3>
      {/* Add action, method="POST" to the form */}
      <form className={register}>
        <input className={email} placeholder="Email"></input>
        <input className={password} placeholder="Password"></input>
        <input
          className={passwordConfirmation}
          placeholder="Password Confirmation"
        ></input>
      </form>
      <button className={createAccountButton}> Create Account</button>
      {/* <button className={loginViaSpotifyButton}> Login with Spotify</button> */}
    </main>
  );
}
