import React, { Component } from 'react';
import logo from './img/moonrockslogo.png';
import vault from './img/vaulthires.jpg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phase: 'nameEntry',
      firstName: '',
      lastName: '',
      pin: ''
    };

    this.handleFirstNameChange = this.handleChange.bind(this, 'firstName');
    this.handleLastNameChange = this.handleChange.bind(this, 'lastName');
    this.handlePinChange = this.handleChange.bind(this, 'pin');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, event) {
    let stateUpdate = {};
    stateUpdate[key] = event.target.value;
    this.setState(stateUpdate);
  }

  handleSubmit(event) {
    if(this.state.phase === 'nameEntry') {
      this.setState({'phase': 'pinEntry'});
    }
    event.preventDefault();
  }

  nameEntryElements() {
    return [
      <input key="firstName" type="text" placeholder="First name"
        value={this.state.firstName} onChange={this.handleFirstNameChange}
        style={{
          "padding": "10px",
          "fontSize": "26px",
          "width": "350px",
          "margin": "10px"
        }}/>,
      <input key="lastName" type="text" placeholder="Last name"
        value={this.state.lastName} onChange={this.handleLastNameChange}
        style={{
          "padding": "10px",
          "fontSize": "26px",
          "width": "350px",
          "margin": "10px"
        }}/>,
      <div key="submit"
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
        onClick = {this.handleSubmit}>
          Continue
      </div>
    ];
  }

  pinEntryElements() {
    return [
      <input key="pin" type="text" placeholder="4-digit PIN"
        value={this.state.value} onChange={this.handlePinChange}
        style={{
          "padding": "10px",
          "fontSize": "26px",
          "width": "350px",
          "margin": "10px"
        }}/>,
      <div key="submit"
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
        onClick = {this.handleSubmit}>
          Withdraw Delicious Cookies
      </div>
    ];
  }

  render() {
    let formElements = [];
    if(this.state.phase === 'nameEntry') {
      formElements = this.nameEntryElements()
    } else if(this.state.phase === 'pinEntry') {
      debugger;
      formElements = this.pinEntryElements()
    }


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
          "display": "flex",
          "textAlign": "center"
        }}>
          {formElements}
        </div>
      </div>
    );
  }
}

export default App;
