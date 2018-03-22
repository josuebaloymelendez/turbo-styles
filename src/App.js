import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import {events_count} from './constants';

import Interface from './ui_menu/ui-interface';

import EventsContainer from './events/events-container';
import EventItem from './events/event-item';

import UIeventsController from './events/ui-events';
import UIeventsControllerAlt from './events/ui-events-alt';

import SlickSlider from './slicked/slider';
import UISlick from './slicked/ui-slick';

import './styles/core.css';

const News = () => (
	<div>
	    <h2>NEWS COMPONENT COMING SOON...</h2>
  	</div>
);

const NoMatch = ({ match, location, history }) => {

	return (
		<div>
			<h2>Component not found! Probably coming soon... :)</h2>
			{match.path}
			{match.url}
			{console.log(match, location, history)}
		</div>
	);
};

const Initial = () => (
	<div><h2>Welcome to Spike Modules!</h2></div>
);

class Events extends Component {

	constructor(){
		super();
		this.state = {
			events:{
				conventional:{
					name: "regular",
					date:{
						color: "green",
						shape: "square",
						month:{
							length: "short"
						}
					},
					summary:{
						shape: "corner",
						color: "green",
						stroke: "no-stroke"
					}
				},
				unconventional:{
					name: "alt-1",
					date:{
						color: "",
						shape: "",
						month:{
							length: "short"
						}
					},
					summary:{
						shape: "",
						color: "",
						stroke: ""
					}
				}
			},
			slick:{
				fade: false,
				status: false,
				arrows: true,
				dots: false,
				adaptiveHeight: true,
				centerMode: false,
				slidesToShow: 3,
				vertical: false
			}
		}
		this.changeState = this.changeState.bind(this);
	}
	
	changeState(keyValue,  fun){
		let objeto = fun(this.state, keyValue);
		this.setState({objeto});
	}

	render(){
		let eventsSlicked = [];
		for(let i = 1; i <= 10; i++ ){
			eventsSlicked.push(
				<div key={i}>
					<EventItem itemStyle={this.state.events.unconventional}/>
				</div>
			);
		}
		return(
			<div className="App">
				<div className="homepage-row">
					<div className="homepage-row-inner">

						<EventsContainer
							sectionName="Conventional events styles"
							eventsType="conventional"
							eventsSummary="Change date and summary shapes independently"
							itemsNum={events_count}
							itemStyle={this.state.events.conventional}
						/>

					</div>
				</div>
				<UIeventsController
					changeState={this.changeState}
				/>


				<div className="homepage-row">
					<div className="homepage-row-inner">

						<EventsContainer
							sectionName="Unconventional events styles"
							eventsType={this.state.events.unconventional.name}
							eventsSummary="Change date and summary shapes together"
							itemsNum={events_count}
							itemStyle={this.state.events.unconventional}
						/>

					</div>
				</div>
				<UIeventsControllerAlt
					changeState={this.changeState}
				/>


				<div className="homepage-row">
					<div className="homepage-row-inner">

						<h2 className="section-title dark-grey"><a href="/">Slicked Events</a></h2>
						<SlickSlider
							settings={this.state.slick}
							slickedContents={eventsSlicked}
						/>

					</div>

					<UISlick
						slidesNum={4}
						slickSettings={this.state.slick}
						changeState={this.changeState}
					/>

				</div>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
		<Interface>
			<Switch>
				<Route exact path="/" component={Initial}/>
				<Route path="/events" component={Events} />
				<Route path="/news" component={News} />
				<Route component={NoMatch}/>
			</Switch>
		</Interface>
		);
	}
}

export default App;

