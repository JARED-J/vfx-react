import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { WaterDrop, CircleMotion, Canvas } from './components'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      effect: 'noEffect'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      effect: event.target.value
    })
  }

  render() {
    let hello = "hello";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to VFX-React</h1>
        </header>
        <p className="App-intro">
          Choose an effect
        </p>
        <button onClick={this.handleClick} value="circlemotion"> Circle Motion </button>
        <button onClick={this.handleClick} value="waterdrop"> Water Drop </button>
        <button onClick={this.handleClick} value="canvas"> Canvas </button>
        { this.state.effect === "canvas" && <Canvas/>}
        { this.state.effect === "circlemotion" &&  <CircleMotion/>}
        { this.state.effect === "waterdrop" && <WaterDrop />}
      </div>
    );
  }
}

export default App;
