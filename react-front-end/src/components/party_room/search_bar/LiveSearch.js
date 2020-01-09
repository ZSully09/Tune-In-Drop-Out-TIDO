import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";

import SearchBar from "./SearchBar";
import Results from "./Results";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    console.log('search',term);
    // hardcoded for test, eventually comes from db
    const token = 'BQA0wC8pU_VIke0CPYDqn_Ce2I_EwSQGHsGX6Id35RrBQhJO6AHKQ2qX8YgzjMCt5L1KQp7bgltByPw6g1ilC_PKnxg5PlEyddLkYB3GAlTFZwQe8TkT9DustnBgUM9XwiMTEiXHNHDb2pxdPyztPx7KRqElZZPtm6516dlv08vaqkWZlqP3W8M'
    axios(`	https://api.spotify.com/v1/search?q=${term}&type=track&limit=5 `,
    {
      headers: {Authorization: `Bearer ${token}`}
    }).then(term => setResults(term.data.tracks.items))
    .catch(err => console.log(err))
  }, [term]);


  return (
    <Fragment>
      <SearchBar onSearch={term => setTerm(term)} > 
      </SearchBar>
      <Results results={results}/>
    </Fragment>  
  );
}