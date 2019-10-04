import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
      title: "MONSTERS ROLODEX"
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = evt => {
    this.setState({ searchField: evt.target.value });
  };

  render() {
    const { monsters, searchField, title } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>{title}</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={evt => this.handleChange(evt)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
