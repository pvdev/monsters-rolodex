import React, { Component } from "react"
import "./App.css"
import { CardList } from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  // takes advantage of lexically scoped arrow function setting 'this' to
  // the component otherwise we'd have to bind this in the constructor
  //handleChange = e => this.setState({ searchField: e.target.value });

  // done with previous state & props function call
  handleChange = e =>
    this.setState((prevState, prevProps) => {
      return { searchField: e.target.value }
    })

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1> Monster's Rolodex </h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
} //end component

export default App
