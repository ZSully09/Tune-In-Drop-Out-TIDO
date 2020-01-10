import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import history from './utils/history';

import Context from "./utils/context";
// import AuthCheck from './utils/authcheck';
import PrivateRoute from "./components/party_room/PrivateRoute";
import Home from "./components/home/Home";
// import Create from './components/Create';
// import Party from './components/Party';
import Login from "./components/login/Login";
import Register from "./components/registration/Registration";
import Create from "./components/create/Create";
import Party from "./components/party_room/Party";
import Join from "./components/join/Join";
import "./App.css";
import { AuthContext } from "./OLD -- context/auth";

// const PrivateRoute = ({ component: Component, auth }) => (
//   <Route
//     render={props =>
//       auth === true ? (
//         <Component auth={auth} {...props} />
//       ) : (
//         <Redirect to={{ pathname: '/signup' }} />
//       )
//     }
//   />
// );

const Routes = () => {
  // const context = useContext(Context);

  return (
    <div>
      <AuthContext.Provider value={true}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/create" component={Create} />
              <PrivateRoute
                path="/party"
                // auth={context.authState}
                component={Party}
              />
              <Route path="/join" component={Join} />
            </Switch>
          </div>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default Routes;

/* <Router history={history}>
        <Header />
        <br />
        <br />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hooksform" component={HooksForm} />
            <Route path="/hookscontainer" component={HooksContainer1} />
            <Route path="/authcheck" component={AuthCheck} />
            <Route path="/signup" component={SignUp} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:pid" component={ShowPost} />
            <Route path="/editpost/:pid" component={EditPost} />
            <Route path="/addpost" component={AddPost} />
            <Route path="/user/:name" component={ShowUser} />
            <PrivateRoute
              path="/profile"
              auth={context.authState}
              component={Profile}
            />
            <PrivateRoute
              path="/sendmessage"
              auth={context.authState}
              component={SendMessage}
            />
            <PrivateRoute
              path="/showmessages/:id"
              auth={context.authState}
              component={ShowMessages}
            />
            <PrivateRoute
              path="/replytomessage"
              auth={context.authState}
              component={ReplytoMessage}
            />
            <PrivateRoute
              path="/privateroute"
              auth={context.authState}
              component={PrivateComponent}
            />
            <PrivateRoute
              path="/profile"
              auth={context.authState}
              component={Profile}
            />
            <Route
              path="/callback"
              render={props => {
                context.handleAuth(props);
                return <Callback />;
              }}
            />
          </Switch>
        </div>
      </Router> */
