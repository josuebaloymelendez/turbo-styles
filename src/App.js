import React, { Component } from 'react';
import EventsList from './events/event';

class App extends Component {
  render() {
    return (
      <div className="App">
       <EventsList />
      </div>
    );
  }
}

export default App;
