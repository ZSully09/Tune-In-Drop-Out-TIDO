import React, { useState, useEffect, useCallback } from 'react';
import './SearchBar.scss';
import useDebounce from "../../../hooks/useDebounce";

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

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
          onChange={event => props.setValue(event.target.value)}
        />
      </form>
    </section>
  );
}