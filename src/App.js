import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter'; // Assuming Counter is in the same directory

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name="Ahmed Makkaoui" />
        <Counter />
      </div>
    );
  }
}

export default App;


