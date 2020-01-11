import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import makePartyName from '../../helpers/names';
import './Create.scss';

export default function Create(props) {
  const createPartyForm = classNames('formn--party');
  const partyName = classNames('input--party--name');
  const createNewPartyButton = classNames('button--create--new');
  return (
    <main>
      <h3> Create a New Party </h3>
      <form className={createPartyForm}>
        <input className={partyName} placeholder={makePartyName()}></input>
        <Link to="/party">
          <button className={partyName}> New Party </button>
        </Link>
      </form>
    </main>
  );
}
