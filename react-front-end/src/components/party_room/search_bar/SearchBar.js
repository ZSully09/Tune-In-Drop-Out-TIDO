import React from 'react';
import './SearchBar.scss';

export default function SearchBar(props) {
  return (
    <section className="search">
      <form className="search__form" onSubmit={event => event.preventDefault()}>
        <input
          className="radius"
          spellCheck="false"
          placeholder=""
          name="search"
          type="text"
          value={props.term}
          onChange={event => props.setTerm(event.target.value)}
        />
      </form>
    </section>
  );
}