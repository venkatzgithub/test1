import React from 'react';
import { Cardlist } from './components/card-list/card-list.component';
import { Searchbox } from './components/search-box/search-box.component';
import './App.css';
import { Component } from 'react';



class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [
        { name: "venkat", id: '321' }, { name: "ranzith", id: '123' }
      ],
      search: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(user => this.setState({ monster: user }
    ));
  }
  render() {
    const { monster, search } = this.state;
    const filtered = monster.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className="App">
        <h1 className="title">Monsters ahead</h1>
        <Searchbox placeholder="search monster" handlechange={e => this.setState({ search: e.target.value })}></Searchbox>

        <Cardlist monster={filtered}>
        </Cardlist>

      </div>
    );
  }
}
export default App;
