// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// import Home from './components/home/Home';
// // import Create from './components/Create';
// // import Party from './components/Party';
// import Login from './components/login/Login';
// import Register from './components/registration/Registration';
// import Create from './components/create/Create';
// import Party from './components/party_room/Party';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: 'Click the button to load data!'
//     };
//   }

//   // fetchData = () => {
//   //   axios
//   //     .get('/api/data') // You can simply make your requests to "/api/whatever you want"
//   //     .then(response => {
//   //       // handle success
//   //       console.log(response.data); // The entire response from the Rails API

//   //       console.log(response.data.message); // Just the message
//   //       this.setState({
//   //         message: response.data.message
//   //       });
//   //     });
//   // };

//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Route path="/" component={Home} />
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//           <Route path="/create" component={Create} />
//           <Route path="/party" component={Party} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import Layout from "./Containers/Layout";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        type: "dark",

        primary: {
          light: "#757ce8",
          main: "#1db954",
          dark: "#191414",
          contrastText: "#fff"
        },
        secondary: {
          light: "#ff7961",
          main: "#ffffff",
          dark: "#191414",
          contrastText: "#000"
        }
      },
      typography: {
        useNextVariants: true
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Layout
            style={{
              fontFamily:
                "spotify-circular,Helvetica Neue,Helvetica,Arial,Hiragino Kaku Gothic Pro,Meiryo,MS Gothic,sans-serif"
            }}
          />
        </CssBaseline>
      </MuiThemeProvider>
    );
  }
}

export default App;
