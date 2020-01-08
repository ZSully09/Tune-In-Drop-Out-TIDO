import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Home.scss';

export default function Home(props) {
  const newPartyButton = classNames('button--new');
  const joinPartyButton = classNames('button--join');
  return (
    <main>
      <h3> TiDo </h3>
      <div classNames="button-div">
        <div>
          <Link to="/create">
            <button className={newPartyButton}> New Party </button>
          </Link>
        </div>
        <div>
        <Link to="/join">
          <button className={joinPartyButton}> Join a Party </button>
        </Link>
        </div>
      </div>
    </main>
  );
}
