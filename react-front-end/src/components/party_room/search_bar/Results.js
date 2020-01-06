import React from "react";

import Song from "./Song";

export default function Results(props) {
  const { results } = props;

  return results.map(song => {
    return <Song key={song.collectionId} {...song} />;
  });
}
