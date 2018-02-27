import React, { Component } from 'react';
import {events_count} from './constants';
import UIeventsController from './events/ui-events';
import EventsList from './events/events-list';
import SlickSlider from './slicked/slider';
import './core.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			slicked :  false,
			events_dateShape : 'circle',
			events_dateColor : 'green',
			events_summaryColor : 'dark'
		}
		this.changeDateShape = this.changeDateShape.bind(this);
	}
	changeDateShape(shape){
		this.setState({ events_dateShape : shape });
	}
	changeSummaryColor(color){
		this.setState({ events_dateColor : color });
	}

	render() {
		return (
			<div className="App">
				<div className="homepage-row dark">
					<div className="homepage-row-inner">
						<SlickSlider/>
					</div>
				</div>
				<UIeventsController
					changeEventdateShape={this.changeDateShape}
					changeSummaryColor={this.changeSummaryColor}
				/>
				<div className="homepage-row">
					<div className="homepage-row-inner">
						<EventsList
							itemsNum={events_count}
							dateShape={this.state.events_dateShape}
							dateColor={this.state.events_dateColor}
							summaryColor={this.state.events_summaryColor}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

