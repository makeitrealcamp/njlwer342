import React, { Component } from 'react';

class App extends Component {
  render() {
    let numbers = []
    for (var i = 1; i <= 100; i++) {
      numbers.push(i)
    }
    return (
      <div>
        <h1>Numeros del 1 al 100</h1>
        <ul>
          {/* ACA DEBEN QUEDAR LOS LI */}
        </ul>
      </div>
    );
  }
}

export default App;
