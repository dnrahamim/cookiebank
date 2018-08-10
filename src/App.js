import React, { Component } from 'react';
import logo from './img/moonrockslogo.png';
import vault from './img/vaulthires.jpg';
import './App.css';

class App extends Component {

  onNameContinue(event) {
    console.log(event);
  }

  render() {
    return (
      <div className="App" style={{
        "display": "flex",
        "flexDirection": "column",
        "height": "100vh"
      }}>
        <header style={{
          "backgroundColor": "white",
          "padding": "10px",
          "display": "flex",
          "flexDirection": "row",
          "flex": "0 0 120px"
        }}>
          <img src={logo} alt="logo" 
            style={{
              "alignSelf":"flex-start",
              "height": "120px"
          }}/>
          <h1
            style={{
              "alignSelf": "center",
              "marginLeft": "40px",
              "color": "#232c64",
              "fontWeight": "500",
              "fontSize": "28px"
            }}>Cookie Banking System
          </h1>
        </header>
        <div style={{
          "backgroundImage": `url(${vault})`,
          "backgroundSize": "cover",
          "backgroundPosition": "center",
          "flex": "1 0 auto",
          "flexDirection": "column",
          "justifyContent": "center",
          "alignItems": "center",
          "display": "flex"
        }}>
          <input type="text" name="firstName" placeholder="First name"
            style={{
              "padding": "10px",
              "fontSize": "26px",
              "width": "350px",
              "margin": "10px"
            }}/>
          <input type="text" name="lastName" placeholder="Last name"
            style={{
              "padding": "10px",
              "fontSize": "26px",
              "width": "350px",
              "margin": "10px"
            }}/>
          <div
            style={{
              "padding": "14px",
              "width": "350px",
              "margin": "10px",
              "backgroundColor": "#005ea6",
              "color": "white",
              "fontSize": "22px",
              "borderRadius": "15px",
              "cursor":"pointer"
            }}
            onClick = {this.onNameContinue}>
              Continue
            </div>
        </div>
      </div>
    );
  }
}

export default App;
