import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import makePartyName from "../../helpers/names";
import "./Create.scss";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.State = {
      createPartyForm: ""
    };
  }

  onPartyChange = event => {
    this.setState({ createPartyForm: event.target.value });
  };

  onSubmitcreatePartyForm = () => {
    fetch("http//localhost:4001/playlist", {
      method: "POST",
      body: JSON.stringify({
        id: this.state.playlist
      })
    });
    console.log(this.state);
    this.props.onRouteChange("/party");
  };

  render() {
    const createPartyForm = classNames("formn--party");
    const partyName = classNames("input--party--name");
    const createNewPartyButton = classNames("button--create--new");

    // const setParty = () => {
    //   const party = {
    //     partyName: props.makePartyName
    //   };
    //   addToast(`${song.songName} was added to the playlist`, {
    //     appearance: 'success',
    //     autoDismiss: true
    //   });
    //   console.log(song);

    //   // TODO: call some callback that came in from props
    //   props.onSelectSong(song);
    // };

    return (
      <main>
        <h3> Create a New Party </h3>
        <form className={createPartyForm}>
          <input
            className={partyName}
            type="text"
            value={makePartyName()}
            onClick={this.onSubmitcreatePartyForm}
          ></input>
          <Link to="/party">
            <button className={createNewPartyButton}> New Party </button>
          </Link>
        </form>
      </main>
    );
  }
}

export default Create;
