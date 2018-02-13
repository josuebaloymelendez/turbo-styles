import React, { Component } from 'react';

import UIeventsController from './events/ui-events';
import EventsList from './events/events-list';
import './core.css';

class App extends Component {
	state = {
		months : ["jan", "feb", "mar","apr","may","jun","jul","ago","sep","oct","nov","dic"]
	}

	alterMonths() {
		console.log("inb")
	}

  render() {
  	let months = this.state.months;
  	let yyy = this.alterMonths;
    return (

      <div className="App">
      	<UIeventsController />
	      <div class="homepage-row">
	      	<div class="homepage-row-inner">
			       <EventsList 
			       	months={months}
			       	yyy={yyy}
			       />
	      	</div>
	     	</div>
      </div>
    );
  }
}

export default App;
