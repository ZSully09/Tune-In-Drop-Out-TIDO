import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import Results from './Results';

export default function LiveSearch(props) {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!term) {
      setResults([]);
      return;
    }

    // hardcoded for test, eventually comes from db
    const token = process.env.REACT_APP_SPOTIFY_SDK_TOKEN;

    axios(`	https://api.spotify.com/v1/search?q=${term}&type=track&limit=5 `, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(term => setResults(term.data.tracks.items))
      .catch(err => console.log(err));
  }, [term]);

  return (
    <Fragment>
      <SearchBar onSearch={term => setTerm(term)}></SearchBar>
      <Results results={results} />
    </Fragment>
  );
}
