import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        {
          name: 'Frankenstein'
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Werewolf'
        },
        {
          name: 'Bob'
        },
        {
          name: 'Zombie'
        }
      ]
    };
  }
  
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, key) => <h1 key={key}>{ monster.name }</h1>)}
      </div>
    );
  }
}

export default App;
