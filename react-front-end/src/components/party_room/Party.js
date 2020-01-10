import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Header from './header/Header';
import Song from './playlist/song/Song';
import Player from '../Player/Player';
import './Party.scss';
import Results from "./search_bar/Results";

import axios from "axios";


export default function Party(props) {

  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    if (!term) {
      setResults([]);
      return
    }
    console.log(term);
    // hardcoded for test, eventually comes from db
    const token = 'BQDd3fKeEIZH8AzHgfLxZrMp4kbMSX-8tbLFu7GHmWq7uwLZiK-YUZ7pmC1aJ1elM-gA49n26ofZcsEgUh-mOI31BnFRTSvve8nObrYv_-_kh5SLvh7YhJILG_5TMv6CLLZIV7cFcq8nYPd90xbkngzdvDuTA1eUGF1Aq53wuNTDrNBcSWUhbzE'
    
    axios(`	https://api.spotify.com/v1/search?q=${term}&type=track&limit=5 `,
    {
      headers: {Authorization: `Bearer ${token}`}
    }).then(term => setResults(term.data.tracks.items))
    .catch(err => console.log(err))
  }, [term]);
  console.log(results)
  return (
    <main>
      <Header onSearch={setTerm}/>
      <Results results={results}/>

      <div className="playlist">
        <Song />
      </div>
      
      <footer>
        <Player />
      </footer>
    </main>
  );
}
