import React, { Component } from 'react';
import './event-item-a.css';

class EventItem extends Component{

	render(){
		let months = this.props;
		return(

			<div className="item">
				<div className="event-date">
					<span className="event-month">{months}</span>
					<span className="event-day"></span>
				</div>
				<div className="event-summary">
					<h3 className="item-name">Event Name</h3>
					<span>Location: Somewhere</span>
					<span>Time: Sometime</span>
				</div>
			</div>
		)
	}
}

export default  EventItem;