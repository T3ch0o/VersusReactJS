import React, { Component } from 'react';
import './App.scss';
import logo from './assets/images/logo.svg'

class App extends Component {
  render() {
    return (
      <div>
        <header className="intro">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <form className="player-form">
                <input type="text" className="player-username" placeholder="Enter your username"/>
                <button type="button" className="btn btn--primary btn--inside uppercase">Confirm</button>
            </form>
        </header>
        <main></main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
