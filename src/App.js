import React, { Component } from 'react';
import logo from './img/moonrockslogo.png';
import vault from './img/vaulthires.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{
        "display": "flex",
        "flex-direction": "column",
        "height": "100vh"
      }}>
        <header style={{
          "background-color": "white",
          "padding": "10px",
          "display": "flex",
          "flex-direction": "row",
          "flex": "0 0 150px"
        }}>
          <img src={logo} alt="logo" 
            style={{
              "align-self":"flex-start",
              "height": "150px"
          }}/>
          <h1
            style={{
              "align-self": "center",
              "margin-left": "40px",
              "color": "#232c64",
              "font-weight": "500",
              "font-size": "28px"
            }}>Cookie Banking System
          </h1>
        </header>
        <div style={{
          "background-image": `url(${vault})`,
          "background-size": "cover",
          "background-position": "center",
          "flex": "1 0 auto",
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "center",
          "display": "flex"
        }}>
          <input type="text" name="FirstName" placeholder="First name"
            style={{
              "padding": "10px",
              "font-size": "26px",
              "width": "350px",
              "margin": "10px"
            }}/>
          <input type="text" name="FirstName" placeholder="Last name"
            style={{
              "padding": "10px",
              "font-size": "26px",
              "width": "350px",
              "margin": "10px"
            }}/>
          <div
            style={{
              "padding": "14px",
              "width": "350px",
              "margin": "10px",
              "background-color": "#005ea6",
              "color": "white",
              "font-size": "22px",
              "border-radius": "15px"
            }}>
              Continue
            </div>
        </div>
      </div>
    );
  }
}

export default App;
