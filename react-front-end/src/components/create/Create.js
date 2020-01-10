import React from "react";
import { Redirect, Link } from "react-router-dom";
import { chance } from "chance";

import classNames from "classnames";
import "./Create.scss";
import Axios from "axios";

export default function Create(props) {
  // const createPartyForm = classNames("form--party");
  // // const partyName = classNames("input--party--name");

  const partyName = () => {
    return Axios.post("/api/party", { partyName: "12345s" });
  };

  // random partyName generator
  // const partyName = chance.sentence({ words: 3 });
  // console.log("partyName", partyName);

  const partyAccessCode = classNames("input--Access--Code");
  const createNewPartyButton = classNames("button--create--new");
  return (
    <main>
      <h3> Create a New Party </h3>
      <form
        className={createPartyForm}
        action="/api/party"
        method="post"
        name="createNewPartyButton"
      >
        <input
          type="partyName"
          className={partyName}
          placeholder="Party Name"
        ></input>
        <Link to="/party">
          <button className={createNewPartyButton}> New Party </button>
        </Link>
      </form>
    </main>
  );
}
