import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import SpotifyLogin from "react-spotify-login";
import classNames from "classnames";
import "./Login.scss";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    // this.state = { redirectToUserPage: false, accessToken: "" };
  }

  // componentDidMount() {                  #TODO Test Again before Delete
  //   fetch("http://localhost:8888/")
  //     .then(response => response.json())
  //     .then(console.log("yello"));
  // }

  render() {
    // const onSuccess = response => {
    //   let accessToken = response.access_token;
    //   console.log(accessToken);
    //   this.setState({
    //     redirectToUserPage: true,
    //     accessToken: response.access_token
    //   });
    // };
    // console.log(this.state.accessToken);
    // const onFailure = response => console.error(response);
    // const buttonText = (
    //   <div>
    //     <img
    //       src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
    //       alt="login-logo"
    //     />
    //     &nbsp;&nbsp;<span>Login with Spotify</span>
    //   </div>
    // );
    // if (this.state.redirectToUserPage === true) {
    //   return <Redirect to="/" />;
    // }

    const login = classNames("form--login");
    const email = classNames("input--email");
    const password = classNames("input--password");
    const loginButton = classNames("button--login");
    const spotifyLoginButton = classNames("button--spotify--login");

    return (
      <div className="login-page">
        <h1>TiDo</h1>
        <section className="login-form">
          <form className={login} action="/api/users" method="post">
            <input type="email" className={email} placeholder="Email"></input>
            <input
              type="password"
              className={password}
              placeholder="Password"
            ></input>
            <div className="button-div">
              <div>
                <Link to="/">
                  <button className={loginButton}>Login</button>
                </Link>
              </div>
              {/* <div>
                <Link to="/">
                  <SpotifyLogin
                    type="button"
                    className={spotifyLoginButton}
                    buttonText={buttonText}
                    clientId={process.env.REACT_APP_SPOTIFY_CLIENT_ID}
                    redirectUri={process.env.REACT_APP_SPOTIFY_REDIRECT_URI}
                    scope={process.env.REACT_APP_SPOTIFY_SCOPE}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                  />
                </Link>
              </div> */}
            </div>
          </form>
        </section>
        <div>
          Don't have an account? Create one&nbsp;
          <a href="http://localhost:3000/register">
            <u>here!</u>
          </a>
        </div>
      </div>
    );
  }
}
export default LoginPage;
