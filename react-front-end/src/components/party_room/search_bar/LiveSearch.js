import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";

import SearchBar from "./SearchBar";
import Results from "./Results"

export default function LiveSearch(props) {
  const [term, setTerm] = useState(""); // what we type in
  const [results, setResults] = useState([]); // the results list
  console.log(term);
  useEffect(() => {
    axios(`	https://api.spotify.com/v1/search?term=${term} `)
  }, [term]);

  return (
    <Fragment>
      <SearchBar setTerm={setTerm} term={term}>
        
      </SearchBar>
    </Fragment>  
  );
}