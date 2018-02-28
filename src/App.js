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
			events_MonthLenght: 'short',
			events_dateShape : 'square',
			events_dateColor : 'green',
			events_summaryShape : 'corner',
			events_summaryColor : 'green',

			slicked :  false,
			slick_total_large: 3,
			slick_total_mid: 2,
			slick_total_small: 1,

			slick_arrows: false,
			slick_dots: true
		}
		this.changeDateShape = this.changeDateShape.bind(this);
		this.changeSummaryColor = this.changeSummaryColor.bind(this);
		this.changeMonthLength = this.changeMonthLength.bind(this);
	}
	changeDateShape(shape){
		this.setState({ events_dateShape : shape });
	}
	changeSummaryColor(color){
		this.setState({ events_summaryColor : color });
	}
	changeMonthLength(long){
		this.setState({ events_MonthLenght : long });
	}
	render() {
		let sliderSettings = {
			slidesToShow: 3,
			arrows: this.state.slick_arrows,
			dots: this.state.slick_dots,
			centerMode: true,
			focusOnSelect: true
		};
		return (
			<div className="App">

				<div className="homepage-row">
					<div className="homepage-row-inner">
						<EventsList
							sectionName="Conventional events styles"
							eventsType="events-container"
							itemsNum={events_count}
							monthLenght={this.state.events_MonthLenght}
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
					changeMonthLength={this.changeMonthLength}
				/>
				<div className="homepage-row">
					<div className="homepage-row-inner">
						<h2 className="section-title dark-grey"><a href="/">Slicked Events</a></h2>
						<SlickSlider
							settings={sliderSettings}
							itemsNum={events_count}
							monthLenght={this.state.events_MonthLenght}
						/>
					</div>
				</div>
				<div className="homepage-row">
					<div className="homepage-row-inner">
						<EventsList
							sectionName="Another events styles 1"
							eventsType="alt-1"
							itemsNum={events_count}
							monthLenght={this.state.events_MonthLenght}
							dateShape={this.state.events_dateShape}
							dateColor={this.state.events_dateColor}
							summaryShape={this.state.events_summaryShape}
							summaryColor={this.state.events_summaryColor}
						/>
					</div>
				</div>
				<div className="homepage-row">
					<div className="homepage-row-inner">
						<EventsList
							sectionName="Another events styles 2"
							eventsType="alt-2"
							itemsNum={events_count}
							monthLenght={this.state.events_MonthLenght}
							dateShape={this.state.events_dateShape}
							dateColor={this.state.events_dateColor}
							summaryShape={this.state.events_summaryShape}
							summaryColor={this.state.events_summaryColor}
						/>
					</div>
				</div>
				<div className="homepage-row">
					<div className="homepage-row-inner">
						<EventsList
							sectionName="Another events styles 3"
							eventsType="alt-3"
							itemsNum={events_count}
							monthLenght={this.state.events_MonthLenght}
							dateShape={this.state.events_dateShape}
							dateColor={this.state.events_dateColor}
							summaryShape={this.state.events_summaryShape}
							summaryColor={this.state.events_summaryColor}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

