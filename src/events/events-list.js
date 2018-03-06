import React, { Component } from 'react';
import EventItem from './event-item';
import './events.scss';

export default class EventsList extends Component{
	render(){
		let items_list = [];
		let {date, summary} = this.props.eventsProps;
		for (let i = 1; i <= this.props.itemsNum; i++){
			items_list.push(
				<EventItem
					key={i}
					dateShape={date.shape}
					dateColor={date.color}
					monthLenght={date.month.length}
					summaryShape={summary.shape}
					summaryColor={summary.color}
					summaryStroke={summary.stroke}
				/>
			);
		}
		return(
			<div id="events_container" className={this.props.eventsType}>
				<h2 className="section-title"><a href="/">{this.props.sectionName}</a></h2>
				<div className="items-list">{items_list}</div>
			</div>
		)
	}
}
