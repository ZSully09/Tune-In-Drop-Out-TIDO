import React, { Component } from 'react';
import './App.css';

import ContextState from './context_state_config';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ContextState />
      </div>
    );
  }
}

export default App;
