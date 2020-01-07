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
    const token = 'BQCc_rqcQdX8yHFi-j-vPOjILipPP-NVTrY1HaqaDxhhZqMS3OP1AEC-jqdFnLB9tDGqX3wNCINSQ_eNPM-s_vhfYcqdYDlVc3FMTHZa-Mdq189tIU5nhJAVz2iK-LUpMnXjqXwTdFAht8FhSaawPjgy3W5keYvwunRGyhM5iMyO8eC2VTGIa1M'
    axios(`	https://api.spotify.com/v1/search?q=${term}&type=track&limit=5 `,
    {
      headers: {Authorization: `Bearer ${token}`}
    }).then(term => console.log(term))
    .catch(err => console.log(err))
  }, [term]);


  return (
    <Fragment>
      <SearchBar setTerm={setTerm} term={term}>
      </SearchBar>
    </Fragment>  
  );
}