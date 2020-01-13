import React from // useState
// useEffect
'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import classNames from 'classnames';
import './Home.scss';

export default function Home(props) {
  const newPartyButton = classNames('button--new');
  const joinPartyButton = classNames('button--join');
  const buttonDiv = classNames('button--div');

  // TEST AXIOS CALL
  // useEffect(() => {
  //   axios.get('/api/tracks').then(res => setState(res.data));
  // }, []);

  // const [state, setState] = useState('');

  return (
    <main>
      <h3> TiDo </h3>
      <div className={buttonDiv}>
        <div>
          <Link to="/create">
            <button className={newPartyButton}> New Party </button>
          </Link>
        </div>
        <div>
          <Link to="/join">
            <button className={joinPartyButton}> Join a Party </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
