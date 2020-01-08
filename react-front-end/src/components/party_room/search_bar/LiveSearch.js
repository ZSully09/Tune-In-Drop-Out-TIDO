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
    const token = 'BQCL8IXzldwzhS08ccrh9LNyvRDYTPjYd93nlpqJmqyWXspYMNkHL65B9oexd2G4aga770SZF70n0_4hVlJzPaQHQF9q-REvq3prJ28O0oNKSzlRvPRdgo6qtBLZtMdWrgVKcNQ_tdIvEitVSoBPpS0yedx6BiUALHabtvp66FY9G6_WfSXixNw'
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