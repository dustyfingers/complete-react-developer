import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: "REACT APP BABY"
    };
  }
  
  render() {
    return (
      <div className="App">
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({string: 'HELLO LOUIE'})}>CHANGE TEXT</button>
      </div>
    );
  }
}

export default App;
