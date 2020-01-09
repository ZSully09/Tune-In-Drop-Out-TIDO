import React from "react";

import DropDownSong from "./DropDownSong";
import { ToastProvider } from 'react-toast-notifications';

export default function Results(props) {
  const { results } = props;

  return results.map(song => {
  
    return  <ToastProvider>
              <DropDownSong key={song.collectionId} {...song} />
            </ToastProvider>;
           
  });
}
