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
    const token = 'BQBGALZSfF-4dT1KuYUJsnkw5FqTFXEISCHvYFrm4HWAEpP_PI0HUCdRWwPstanZzaF6x-mySnFdeRq-w62isQNjWRquTukIae-jTlcZvU64PahL_abU6uHhqtwsjBxjD9hiUyWBbcOFvH2hzXtYC-yvnwYvfbu80I7JmJOOWGe1dEcqgwPmvD8'
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