import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Registration.scss';

export default function Register(props) {
  const registerPage = classNames('div--register');
  const register = classNames('form--register');
  const email = classNames('input--email');
  const password = classNames('input--password');
  const passwordConfirmation = classNames('input--password--confirmation');
  const createAccountButton = classNames('button--create--account');
  const pageSwap = classNames('div--swap');

  const onRegistering = () => {
    return axios.post('/api/users', { email: 'a@a.com', password: 'password' });
  };

  return (
    <div className={registerPage}>
      <h3> TiDo Registration </h3>
      {/* Add action, method="POST" to the form */}
      <form
        className={register}
        action="/api/users"
        method="post"
        name="register"
      >
        <input type="email" className={email} placeholder="Email"></input>
        <input
          type="password"
          className={password}
          placeholder="Password"
        ></input>
        <input
          type="password"
          className={passwordConfirmation}
          placeholder="Password Confirmation"
        ></input>
      </form>
      <Link to="/">
        <button
          type="submit"
          className={createAccountButton}
          onClick={onRegistering}
        >
          Create Account
        </button>
      </Link>
      <div>
        Already have an account? Login&nbsp;
        <a href="http://localhost:3000/login" className={pageSwap}>
          <u>here!</u>
        </a>
      </div>
    </div>
  );
}
