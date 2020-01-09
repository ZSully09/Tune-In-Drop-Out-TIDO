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
    const token = 'BQBSxIAAOIQSkF5SNM5gKJnV_4PjoF48V75sYMy7R1qFKVIKBwcBSgeu8DMF6CdmbwNBNUC1QIbvdtlcHhGUwTGHXL7MJZFtLiUoiyphpcDvztnWB3qYVAWJDg_Y-E-MRhMMlkvsSoCKCvO_Mr2LNtW8aSrvv-fTvtGdEksjMmbWCp-2_RQnQ78'
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