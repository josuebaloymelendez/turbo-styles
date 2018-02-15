import React, { Component } from 'react';
import {events_count} from './constants';
import UIeventsController from './events/ui-events';
import EventsList from './events/events-list';
import './core.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      	<UIeventsController />
	      <div className="homepage-row">
	      	<div className="homepage-row-inner">
			       <EventsList itemsNum={events_count}/>
	      	</div>
	     	</div>
      </div>
    );
  }
}

export default App;
