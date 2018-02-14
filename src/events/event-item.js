import React, { Component } from 'react';
import './event-item-a.css';

class EventItem extends Component{
	constructor(){
		super();
		let	months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dic"];
		let 	random_month = months[Math.round(Math.random()*11 + 1)],
				random_day = Math.round(Math.random()*30 + 1);
		this.state = {
			r_month : random_month,
			r_day : random_day
		}
	}
	render(){
		return(
			<div className="item row-in-large">
				<div className="event-date">
					<span className="event-month">{this.state.r_month}</span>
					<span className="event-day">{this.state.r_day}</span>
				</div>
				<div className="event-summary">
					<h3 className="item-name">Event Name</h3>
					<span className="item-text"><b>Location:</b> Somewhere</span>
					<span className="item-text"><b>Time:</b> Sometime</span>
				</div>
			</div>
		)
	}
}

export default  EventItem;