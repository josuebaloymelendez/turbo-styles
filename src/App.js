import React, { Component } from 'react';
import {events_count} from './constants';
import UIeventsController from './events/ui-events';

import EventsList from './events/events-list';
import EventItem from './events/event-item';

import SlickSlider from './slicked/slider';
import UISlick from './slicked/ui-slick';
import './core.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			events:{
				date:{
					color: "green",
					shape: "square",
					month:{
						length: "short"
					}
				},
				summary:{
					shape: "corner",
					color: "green"
				}
			},
			slicked:{
				status: false,
				total:{
					large: 3,
					mid: 2,
					small: 1
				},
				arrows: false,
				dots: true
			},
			

			slickedingus :  false,
			slick_total_small: 1,
			slick_total_mid: 2,
			slick_total_large: 3,
			slick_arrows: false,
			slick_dots: true
		}
		this.changeState = this.changeState.bind(this);
	}

	changeState(keyName, keyValue,  fun){
		let objeto = fun(this.state, keyValue);
		this.setState({[keyName]: objeto});
		console.log(this.state);
	}
	render() {
		let sliderSettings = {
			slidesToShow: this.state.slick_total_large,
			arrows: this.state.slick_arrows,
			dots: this.state.slick_dots,
			focusOnSelect: true,
			responsive: [
				{
					breakpoing: 1024,
					settings:{
						slidesToShow: this.state.slick_total_mid
					}
				},
				{
					breakpoing: 768,
					settings:{
						slidesToShow: this.state.slick_total_small
					}
				}
			]
		};
		let eventsSlicked = [];
		for(let i = 1; i <= 10; i++ ){
			eventsSlicked.push(
				<div key={i}>
					<EventItem monthLenght="short"/>
				</div>
			);
		}
		
		return (
			<div className="App">

				<div className="homepage-row">
					<div className="homepage-row-inner">
						<EventsList
							sectionName="Conventional events styles"
							eventsType="events-container"
							eventsProps={this.state.events}
							itemsNum={events_count}
						/>
					</div>
				</div>
				<UIeventsController
					changeProps={this.state.events}
					changeState={this.changeState}
				/>
				<div className="homepage-row">
					<div className="homepage-row-inner">
						<h2 className="section-title dark-grey"><a href="/">Slicked Events</a></h2>
						<SlickSlider
							settings={sliderSettings}
							slickedContents={eventsSlicked}
						/>
					</div>
					<UISlick changeSlidesNumber={this.changeSlickSlides} />
				</div>

			</div>
		);
	}
}

export default App;

