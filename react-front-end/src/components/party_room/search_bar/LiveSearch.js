import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";

import SearchBar from "./SearchBar";
import Results from "./Results";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!term) {
      setResults([]);
      return
    }
    
    // hardcoded for test, eventually comes from db
    const token = 'BQAwmvjZlPwpzVl-ydOV07G9b1F58U1T5yLW4BlI9WIy8S5RQkJZjFwW1hwZ7GIfybtCzgl6BluOn5l4iEuntP3x1-U3_ykVlZANtIuY9ri2mGFAJZ4VEdd6K-ZJol40vkXI0U7YJLGJ0zHBk3kskFFZqyygId-QlMs3kaQ8GUcd8rZERAUDaXw'
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