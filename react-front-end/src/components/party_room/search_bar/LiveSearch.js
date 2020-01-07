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
    const token = 'BQCR3QRS9NelDv7AXUALOpj9ABWD7W4pegOJtelZX7oJPuzofkCZVOKtM1KWpiOnbOO4wjmpFudeyh3GPTVlDyAXMDLmBWw0fEMCxkToHNcVBqE4rlWjtCRc82eEg6FrINeQ48Twf32SIyPIPY-utg-gsujLgiIkJ5BA5sQ9seuU8ej-KdRgHvA'
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