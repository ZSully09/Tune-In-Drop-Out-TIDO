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
    const token = 'BQAeMZgcO8E7RDbjOxJu-VxvgfFwDbaBpXVkTYuOA-HkVE7ZvzwKarjxMzyF8QpCg8LIquGDicTLOX4NabwU8WjR7-KuvnOlQ5Wmvl6kIrPG95wXqeX1dn68X6vTDpFUBxU2O8nXFzkz655jFIKP4vnhKzYa4DY2GJg1MTEWrRCM1O0ThB0kfJg'
    axios(`	https://api.spotify.com/v1/search?q=name:${term}&type=track `, 
    {
      headers: {Authorization: `Bearer ${token}`}
    }).then(res => console.log(term))
    .catch(err => console.log(err))
  }, [term]);


  return (
    <Fragment>
      <SearchBar setTerm={setTerm} term={term}>
      </SearchBar>
    </Fragment>  
  );
}