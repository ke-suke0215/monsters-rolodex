import React, { Component } from 'react';
import CardLit from './component/card-list/card-list.component'
import './App.css';
import SearchBox from './component/search-box/search-box.component.jsx'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state

    //検索後のmonster配列作成
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardLit monsters={filterMonsters} />
      </div>
    )
  }
}