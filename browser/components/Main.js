import React from 'react';

import { catsData, dogsData } from '../../public/data';
import AnimalsList from './AnimalsList';
import AnimalProfile from './AnimalProfile';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'all',
      cats: catsData,
      dogs: dogsData,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src="/logo.png"
            className="App-logo"
            alt="logo"
          />
          <h3>derpy pets</h3>
        </div>

        <div className="container cat-or-dog">
          <div className="row">
            <button className="btn-flat btn-large col s5">I WANT A MEOWER</button>
            <button className="btn-flat btn-large col s5 offset-s2">I WANT A BARKER</button>
          </div>
        </div>

        <div className="App-content container-fluid">
          {
            (this.state.view === 'cats' || this.state.view === 'all') &&
            <AnimalsList animals={this.state.cats} species={'kitty'} />
          }

          {
            (this.state.view === 'dogs' || this.state.view === 'all') &&
            <AnimalsList animals={this.state.dogs} species={'doggo'} />
          }
        </div>
      </div>
    );
  }
}

export default Main;
