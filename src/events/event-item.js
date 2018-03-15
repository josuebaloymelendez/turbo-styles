import React, { Component } from 'react';
import './event-item-a.css';

class EventItem extends Component{
	constructor(props){
		super(props);
		let 	item_name = ["Very unnecesary long name for the event as it usually do", "A standard name for event", "Short name"],
				monthsLong = ["January","February","March","April","May","June","July","August","September","October","November","December"],
				monthsShort = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		let 	r_name = item_name[Math.ceil(Math.random()*item_name.length - 1)],
				r_day = Math.round(Math.random()*30 + 1),
		 		r_month = this.props.itemStyle.date.month.length !== "short" ? 	monthsLong[Math.ceil(Math.random()*monthsLong.length - 1)] : monthsShort[Math.ceil(Math.random()*monthsShort.length - 1)];
		this.state ={ name: r_name, day: r_day, month: r_month }
	}
	render(){
		let {name, day, month} = this.state;
		let {date, summary} = this.props.itemStyle;
		return(
			<div className="item">
				<div className={`item-date ${date.color} ${date.shape}`}>
					<span className="event-day">{day}</span>
					<span className="event-month">{month}</span>
				</div>
				<div className={`item-summary ${summary.color} ${summary.shape} ${summary.stroke}`}>
					<h3 className="item-name"><a href="/">{name}</a></h3>
					<span className="item-text"><b>Location:</b> Somewhere</span>
					<span className="item-text"><b>Time:</b> Sometime</span>
				</div>
			</div>
		)
	}
}

export default  EventItem;