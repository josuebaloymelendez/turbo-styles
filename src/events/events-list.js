import React, { Component } from 'react';
import {events_count} from '../constants';
import EventItem from './event-item';
import './events.css';


export default class EventsList extends Component{

	render(){
		const {months, yyy} = this.props;
		let kek = months.filter(word => word == "jan");
		yyy();
		return(
			<div id="quicklinks">
				<h2 class="section-title">titulo</h2>
				<ul className="items-list">
					{kek.map((item) =>(	
						<li>{item}</li>
					))}
				</ul>
			</div>
		)
	}
}
