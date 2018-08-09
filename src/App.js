import React, { Component } from 'react';
import logo from './img/moonrockslogo.png';
import vault from './img/vaulthires.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{
        "text-align": "left"
      }}>
        <header style={{
          "background-color": "white",
          "height": "150px",
          "padding": "20px"
        }}>
          <img src={logo} alt="logo" 
            style={{
               "height": "150px"
          }}/>
        </header>
        <div style={{
          "height": "450px",
          "background-image": `url(${vault})`,
          "background-size": "cover",
          "background-position": "center"
        }}/>
      </div>
    );
  }
}

export default App;
