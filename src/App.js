import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome num={7*8} text="El número es " />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Welcome extends Component{
  render(){
    const { num, text } = this.props;
    return(
      <h1 className="App-title">{text + num}</h1>
    )
  }
}

export default App;
