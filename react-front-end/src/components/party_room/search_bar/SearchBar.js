import React, { useState, useEffect } from 'react';
import './SearchBar.scss';
import useDebounce from '../../../hooks/useDebounce';

export default function SearchBar({ term, onSearch }) {
  const [value, setValue] = useState(term);
  const debouncedTerm = useDebounce(value, 1000);

  useEffect(() => onSearch(debouncedTerm), [debouncedTerm]);
  useEffect(() => {
    setValue(term);
    console.log('term effect', term);
  }, [term]);

  return (
    <section className="search">
      <input
        className="radius"
        spellCheck="false"
        placeholder="Search for a song"
        name="search"
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </section>
  );
}
