import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Join.scss';

export default function Join(props) {
  const createPartyForm = classNames('formn--party');
  const partyName = classNames('input--party--name');
  const createNewPartyButton = classNames('button--create--new');
  return (
    <main>
      <h3> Join a Party </h3>
      <form className={createPartyForm}>
        <input className={partyName} placeholder="Party Name"></input>
        <Link to="/party">
          <button className={createNewPartyButton}> New Party </button>
        </Link>
      </form>
      Hello World x2
    </main>
  );
}
