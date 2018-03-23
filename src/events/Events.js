import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'

import EventsContainer from './events-container';
import EventItem from './event-item';

import UIeventsController from './ui-events';
import UIeventsControllerAlt from './ui-events-alt';

import SlickSlider from '../slicked/slider';
import UISlick from '../slicked/ui-slick';

import {events_count} from '../constants';

export default class Events extends Component {
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
		const Conventional = () =>{
			return (
				<div>
					<EventsContainer
						sectionName="Conventional events styles"
						eventsType="conventional"
						eventsSummary="Change date and summary shapes independently"
						itemsNum={events_count}
						itemStyle={this.state.events.conventional}
					/>
					<UIeventsController
						changeState={this.changeState}
					/>
				</div>
			);
		},
		Unconventional = () =>{
			return(
				<div>
					<EventsContainer
						sectionName="Unconventional events styles"
						eventsType={this.state.events.unconventional.name}
						eventsSummary="Change date and summary shapes together"
						itemsNum={events_count}
						itemStyle={this.state.events.unconventional}
					/>
					<UIeventsControllerAlt
						changeState={this.changeState}
					/>
				</div>
			);
		},
		Slicked = () =>{
			return(
				<div>
					<h2 className="section-title dark-grey"><a href="/">Slicked Events</a></h2>
					<SlickSlider
						settings={this.state.slick}
						slickedContents={eventsSlicked}
					/>
					<UISlick
						slidesNum={4}
						slickSettings={this.state.slick}
						changeState={this.changeState}
					/>
				</div>
			);
		}
		return(
			<main id="content_main" className="site-content" aria-label="Main Site Content">
				<div className="event-tabs">
					<Link to="/events/conventional">Conventional</Link>
					<Link to="/events/unconventional">Unconventional</Link>
					<Link to="/events/slicked">Slicked events</Link>
				</div>
				<div className="homepage-row">
					<div className="homepage-row-inner">
						<Route exact path="/events/conventional" component={Conventional} />
					</div>
				</div>
				<div className="homepage-row">
					<div className="homepage-row-inner">
						<Route path="/events/unconventional" component={Unconventional} />
					</div>
				</div>
				<div className="homepage-row">
					<div className="homepage-row-inner">
						<Route path="/events/slicked" component={Slicked} />

					</div>
				</div>
			</main>
		);
	}
}