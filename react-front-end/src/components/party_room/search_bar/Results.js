import React from "react";

import DropDownSong from "./DropDownSong";
import { ToastProvider } from 'react-toast-notifications';


export default function Results({results, onSelectSong}) {

  return (<ToastProvider>
    {results.map(song => (
      <DropDownSong key={song.collectionId} {...song} onSelectSong={onSelectSong} />
    ))}
  </ToastProvider>)
}
