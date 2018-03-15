import React, { Component } from 'react';
import EventItem from './event-item';
import './events.scss';

export default class EventsList extends Component{
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
			<div className={`events-container ${this.props.eventsType}`}>
				<h2 className="section-title"><a href="/">{this.props.sectionName}</a></h2>
				<div className="section-summary">{this.props.eventsSummary}</div>
				<div className="items-list">{items_list}</div>
			</div>
		)
	}
}
