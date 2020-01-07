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
    const token = 'BQBR7WFAGcuhpKM9BNxC0Ly4KxDGSibNigLqZ7_k-ljN5CKat3nS_M4ULZJg35s9IFn92eHKsh_STtbJbaQcjQ09jpsG5LRYRAjbqPKhRD30aMVkCMgm1O6OeVlb_t_71sOlvAnU9aXxHGbtGhFQcduZEo6yfaiPXugstxVe1V0xS-IH65LW_Ck'
    axios(`	https://api.spotify.com/v1/search?q=${term}&type=track&limit=5 `,
    {
      headers: {Authorization: `Bearer ${token}`}
    }).then(term => console.log(term))
    .catch(err => console.log(err))
  }, [term]);


  return (
    <Fragment>
      {/* <SearchBar onSearch={term => setTerm(term)} > */}
      <SearchBar setTerm={setTerm} term={term}>
      </SearchBar>
    </Fragment>  
  );
}