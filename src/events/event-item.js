import React, { Component } from 'react';
import './event-item-a.css';

class EventItem extends Component{

	constructor(props){
		super(props);
		let 	item_name = ["Very unnecesary long name for the event", "A standard name for event", "Short name"],
				months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dic"],
				random_name = item_name[Math.ceil(Math.random()*item_name.length - 1)],
				random_month = months[Math.ceil(Math.random()*months.length - 1)],
				random_day = Math.round(Math.random()*30 + 1);
		this.state = {
			defaultDate : "item-date",
			defaultSummary : "item-summary",
			r_name :  random_name,
			r_month : random_month,
			r_day : random_day
		}
	}
	render(){
		let {
			dateColor, dateShape, summaryColor
		} = this.props;
		return(
			<div className="item row-only-large">
				<div className={`${this.state.defaultDate} ${dateColor} ${dateShape}`}>
					<span className="event-day">{this.state.r_day}</span>
					<span className="event-month">{this.state.r_month}</span>
				</div>
				<div className={this.state.defaultSummary + " " + summaryColor}>
					<h3 className="item-name"><a href="/">{this.state.r_name}</a></h3>
					<span className="item-text"><b>Location:</b> Somewhere</span>
					<span className="item-text"><b>Time:</b> Sometime</span>
				</div>
			</div>
		)
	}
}

export default  EventItem;