import React from "react";

import DropDownSong from "./DropDownSong";

export default function Results(props) {
  const { results } = props;

  return results.map(song => {
    return <DropDownSong key={song.collectionId} {...song} />;
  });
}
