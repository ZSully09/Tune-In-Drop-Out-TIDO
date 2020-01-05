import React from 'react';
import classNames from 'classnames';

export default function Login(props) {
  const join = classNames('form--join');
  const partyName = classNames('input--party--name');
  const accessCode = classNames('input--access--code');
  const joinButton = classNames('button--join');

  return (
    <main>
      <h3> Join a Party </h3>
      <form className={join}>
        <input className={partyName} placeholder="Party Name"></input>
        <input className={accessCode} placeholder="Access Code"></input>
      </form>
      <button className={joinButton}> Join</button>
    </main>
  );
}
