import React, { Component } from 'react';

import './App.css';

import ContextState from './context_state_config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: 0
    };
  }

  render() {
    // const { response } = this.state;
    return (
      <div>
        <ContextState />
      </div>
    );
  }
}

export default App;
