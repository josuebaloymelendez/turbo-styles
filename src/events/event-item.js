import React, { Component } from 'react';
import './event-item-a.css';
import {eventContent} from '../constants/dates';


class EventItem extends Component{
	constructor(props){
		super(props);
		let {name, monthL, monthS} = eventContent;
		let 	r_name = name[Math.ceil(Math.random()*name.length - 1)],
				r_day = Math.round(Math.random()*30 + 1),
		 		r_month = this.props.itemStyle.date.month.length !== "short" ? 	monthL[Math.ceil(Math.random()*monthL.length - 1)] : monthS[Math.ceil(Math.random()*monthS.length - 1)];
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