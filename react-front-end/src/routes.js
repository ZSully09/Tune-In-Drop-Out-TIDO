import React from "react"; // { useContext }
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
// import history from './utils/history';

// import Context from './utils/context';
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
              <PrivateRoute path="/party/:id" component={Party} />
              <Route path="/join" component={Join} />
              <Route path="/id" children={<Child />} />
            </Switch>
          </div>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

// function Child(props) {
//   let { id } = useParams();
//   // return <h1>"Hey DJ" {props.match.params.id}!</h1>;
//   console.log("hey DJ", id);
//   return;
// }

function Child() {
  let { id } = useParams();
  console.log("Play ma Song", id);
  return;
}

export default Routes;
