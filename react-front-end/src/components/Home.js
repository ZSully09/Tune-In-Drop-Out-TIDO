import React from 'react';
import classNames from 'classnames';
import './Home.scss';

export default function Home(props) {
  const newPartyButton = classNames('button--new');
  const joinPartyButton = classNames('button--join');
  return (
    <main>
      <h3> TiDo </h3>
      <button className={newPartyButton}> New Party </button>
      <button className={joinPartyButton}> Join a Party </button>
    </main>
  );
}
