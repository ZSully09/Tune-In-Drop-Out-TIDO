import React, { Component } from 'react';
import socketIOClient from './../node_modules/socket.io-client';
import './App.css';

import ContextState from './context_state_config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: 0,
      endpoint: 'http://127.0.0.1:4001'
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    //Very simply connect to the socket
    const socket = socketIOClient(endpoint);
    //Listen for data on the "outgoing data" namespace and supply a callback for what to do when we get one. In this case, we set a state variable
    socket.on('outgoing data', data => this.setState({ response: data.num }));
    console.log('outgoing data');
  }

  render() {
    const { response } = this.state;
    return (
      <div>
        <ContextState />
      </div>
    );
  }
}

export default App;
