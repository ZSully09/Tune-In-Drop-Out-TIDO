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
    const token = 'BQCNHmUTcNDcDr203z8nfmUSH_3hDl5s45xrwkYuJr0MvHaAoqxyaYCo84Mhs80QeMmHUVy-qDX_yDBCM5fttPJqEbhAKo118iQ9HcqR5iaItU1OaTxo9auzGQboXPGFCjHLqSbyOiecmSjYL7sPsorOXhe-AZYIGY_R1ZkZVTYLhZiDleG5eBg'
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