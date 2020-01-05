// import React from 'react';
// import { Grid, Typography } from '@material-ui/core';
// import classNames from 'classnames';
// import './Login.scss';

// export default function Login(props) {
//   const login = classNames('form--login');
//   const email = classNames('input--email');
//   const password = classNames('input--password');
//   const loginButton = classNames('button--login');
//   const loginViaSpotifyButton = classNames('button--spotify--login');
//   return (
//     <main>
//       <h3> TiDo Login </h3>
//       {/* Add action, method="POST" to the form */}
//       <form className={login}>
//         <input className={email} placeholder="Email"></input>
//         <input className={password} placeholder="Password"></input>
//       </form>
//       <button className={loginButton}> Login</button>
//       {/* <button className={loginViaSpotifyButton}> */}
//       <a
//         href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&scope=${process.env.REACT_APP_SPOTIFY_SCOPE}&response_type=token`}
//         style={{ textDecoration: 'none' }}
//       >
//         {' '}
//         Login with Spotify
//       </a>
//       {/* </button> */}
//     </main>
//   );
// }

import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Login = () => (
  <Grid container>
    <Grid item style={{ margin: "0 auto" }}>
      {/* <a
                href="http://spotify-test-backend.herokuapp.com/login"
                style={{ textDecoration: "none" }}
            > */}
      {/* prod */}
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&scope=${process.env.REACT_APP_SPOTIFY_SCOPE}&response_type=token`}
        style={{ textDecoration: "none" }}
      >
        <Typography variant="h1">Login with Spotify</Typography>
      </a>
    </Grid>
  </Grid>
);

export default Login;
