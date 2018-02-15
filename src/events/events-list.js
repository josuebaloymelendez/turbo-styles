import React, { Component } from 'react';
import {events_count} from '../constants';
import EventItem from './event-item';
import './events.css';

export default class EventsList extends Component{

	render(){
		let items_list = [];
		for (let i = 1; i <= this.props.itemsNum; i++){
			items_list.push(<EventItem key={i}/>);
		}
		return(
			<div id="events_container">
				<h2 className="section-title">Upcoming Events</h2>
				<div className="items-list slicked">{items_list}</div>
			</div>
		)
	}
}
