import React, { Component } from 'react';
import EventsList from './events/events-list';
import './core.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="homepage-row">
      	<div class="homepage-row-inner">
		       <EventsList />
      	</div>
     	</div>
      </div>
    );
  }
}

export default App;
