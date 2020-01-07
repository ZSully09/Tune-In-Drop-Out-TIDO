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
    const token = 'BQDKeUvPqaXaXK2kTZoLp5cxA1uBvMLPQWtOKL1mrvNdr0zWPGtaAJiCvDavRfN2gcsIQiN0BYSAoZn4RxHrOiNKSMafIgq9HNRj-JGKYy-FMFzBNinK0OHUFnL1V_-m48b1K1Lj4UkmfReukTFxDUdhKhW2LwLAx8a2Vv6IVDRof1vTc1pnMHs'
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