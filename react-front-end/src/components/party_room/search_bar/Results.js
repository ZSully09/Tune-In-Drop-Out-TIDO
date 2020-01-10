import React from "react";

import DropDownSong from "./DropDownSong";
import { ToastProvider } from 'react-toast-notifications';


export default function Results({results}) {

  return (<ToastProvider>
    {results.map(song => (
      <DropDownSong key={song.collectionId} {...song} />
    ))}
  </ToastProvider>)
}
