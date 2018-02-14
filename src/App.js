import React, { Component } from 'react';

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
			       <EventsList/>
	      	</div>
	     	</div>
      </div>
    );
  }
}

export default App;
