import React, { Component } from 'react';
import EventItem from './event-item';
import ItemsList from '../items_list/items-list';

import './events.css';

export default class EventsContainer extends Component{
	render(){
		let items_list = [];
		for (let i = 1; i <= this.props.itemsNum; i++){
			items_list.push(
				<EventItem
					key={i}
					itemStyle={this.props.itemStyle}
				/>
			);
		}
		return(
			<div className={`content-container events-container ${this.props.eventsType}`}>
				<h2 className="section-title"><a href="/">{this.props.sectionName}</a></h2>
				<div className="section-summary">{this.props.eventsSummary}</div>
				<ItemsList
					class_name="three-in-row"
					contents={items_list}
				/>
			</div>
		)
	}
}
