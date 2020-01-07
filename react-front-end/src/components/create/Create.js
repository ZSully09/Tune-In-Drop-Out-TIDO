import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Create.scss';

export default function Create(props) {
  const createPartyForm = classNames('formn--party');
  const partyName = classNames('input--party--name');
  const partyAccessCode = classNames('input--Access--Code');
  const createNewPartyButton = classNames('button--create--new');
  return (
    <main>
      <h3> Create a New Party </h3>
      <form className={createPartyForm}>
        <input className={partyName} placeholder="Party Name"></input>
        <input className={partyAccessCode} placeholder="Access Code"></input>
        <Link to="/party">
          <button className={createNewPartyButton}> New Party </button>
        </Link>
      </form>
    </main>
  );
}
