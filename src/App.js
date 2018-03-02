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
					color: "green",
					stroke: "no-stroke"
				},
				unstyled:{
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
				},
			},

			slick:{
				status: false,
				vp:{
					large: 1024,
					mid: 768,
					small: 320
				},
				total:{
					large: 3,
					mid: 2,
					small: 1
				},
				arrows: false,
				dots: true
			}
		}
		this.changeState = this.changeState.bind(this);
	}
	
	changeState(keyValue,  fun){
		let objeto = fun(this.state, keyValue);
		this.setState({objeto});
	}
	render() {
		let sliderSettings = {
			slidesToShow: this.state.slick.total.large,
			arrows: this.state.slick.arrows,
			dots: this.state.slick.dots,
			focusOnSelect: true,
			responsive: [
				{
					breakpoing: this.state.slick.vp.large,
					settings:{
						slidesToShow: this.state.slick.total.mid
					}
				},
				{
					breakpoing: this.state.slick.vp.mid,
					settings:{
						slidesToShow: this.state.slick.total.small
					}
				}
			]
		};
		let eventsSlicked = [];
		for(let i = 1; i <= 5; i++ ){
			eventsSlicked.push(
				<div key={i}>
					<EventItem monthLenght="short"/>
				</div>
			);
		}
		var obj = {};
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

