import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import makePartyName from '../../helpers/names';
import accessToken from '../login/Login';
import './Create.scss';
// import { AuthContext } from '../../OLD -- context/auth';

console.log(accessToken);

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createPartyForm: '',
      name: makePartyName()
    };
  }

  // onPartyChange = event => {
  //   this.setState({ createPartyForm: event.target.value });
  // };

  onSubmitcreatePartyForm = () => {
    let user_id = 'zsullivan93';
    console.log('before');
    fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
      headers: {
        Authorization: `Bearer BQDkOCyzBNE5j0QFaN9eaaBp4zq2nfhsdDy9TD629yverUHpAVEnEtRdX3g4NOrA7XT6J8meebXfRp4cWK06jwo9xlmSttAJJFkagHVGA2YZiKTE1Jx_6wl6lgcmWDh1rSn_VctSSWeR6AHOziK8cVRfMUI4XZ66y4DjHEkZDSaWRdfE8d8CqbIO7BkZqKCvWgMdEO97a59xiEtXGSPAvlrpMEBGaHSwwsGIDwpU8yhkp69wh3KHCfF3G9mnnq4`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        public: true
      })
    })
      .then(res => {
        console.log('create party', res);
      })
      .catch(error => {
        console.log('create failed', error);
      });
    // console.log('name', this.state.name);
    // console.log(this.state);
    // this.props.onRouteChange('/party');
  };

  render() {
    const createPartyForm = classNames('formn--party');
    const partyName = classNames('input--party--name');
    const createNewPartyButton = classNames('button--create--new');

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
            defaultValue={this.state.name}
          ></input>
          <Link to="/party">
            <button
              onClick={this.onSubmitcreatePartyForm}
              className={createNewPartyButton}
            >
              New Party
            </button>
          </Link>
        </form>
      </main>
    );
  }
}

export default Create;
