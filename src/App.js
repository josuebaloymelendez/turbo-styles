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
			events_summaryShape : 'round',
			events_summaryColor : 'green'
		}
		this.changeDateShape = this.changeDateShape.bind(this);
		this.changeSummaryColor = this.changeSummaryColor.bind(this);
	}
	changeDateShape(shape){
		this.setState({ events_dateShape : shape });
	}
	changeSummaryColor(color){
		this.setState({ events_summaryColor : color });
	}

	render() {
		return (
			<div className="App">
				<div className="homepage-row dark">
					<div className="homepage-row-inner">
						
					</div>
				</div>
				<div className="homepage-row">
					<div className="homepage-row-inner">
						<EventsList
							itemsNum={events_count}
							dateShape={this.state.events_dateShape}
							dateColor={this.state.events_dateColor}
							summaryShape={this.state.events_summaryShape}
							summaryColor={this.state.events_summaryColor}
						/>
					</div>
				</div>
				<UIeventsController
					changeEventdateShape={this.changeDateShape}
					changeSummaryColor={this.changeSummaryColor}
				/>
			</div>
		);
	}
}

export default App;

