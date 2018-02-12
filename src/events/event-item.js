import React, { Component } from 'react';

class EventItem extends{
	render(){
		return(
			<div className="item">
				<div className="event-date">
					<span>event day</span>
					<span>even month</span>
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
export default EventItem;