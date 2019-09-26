import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, key) => (
          <h1 key={key}>{monster.name}</h1>
        ))}
        <CardList name="Louie" amazingProp={{ prop: "very cool" }}>
          this is props.children!
        </CardList>
      </div>
    );
  }
}

export default App;
