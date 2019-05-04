import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './compoments/Card';

class App extends Component {
  render() {
    return (
      <div>
        <h2 class="aha">App component</h2>
        <Card imageLink="https://robohash.org/ayoubregaieg" name="ayoub" function="student"/>
        <Card imageLink="https://robohash.org/ahmedfakhfak" name="ahmed" function="game instracteur"/>
        <Card imageLink="https://robohash.org/brahimjemal" name="brahim" function="student"/>
        <Card imageLink="https://robohash.org/rahmagomycode" name="rahma" function="manager"/>
        
        
      </div>
    );
  }
}

export default App;
