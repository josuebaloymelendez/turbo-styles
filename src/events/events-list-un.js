import React, { Component } from 'react';
import EventItem from './event-item';
import './events-un.css';

export default class EventsUnconventionalList extends Component{
	render(){
		let  		items_list = [],
					{dateShape, dateColor, summaryShape, summaryColor} = this.props;
		for (let i = 1; i <= this.props.itemsNum; i++){
			items_list.push(
				<EventItem
					key={i}
					dateShape={dateShape}
					dateColor={dateColor}
					summaryShape={summaryShape}
					summaryColor={summaryColor}
				/>
			);
		}
		return(
			<div id="events_container">
				<h2 className="section-title"><a href="/">Unconventional Events Styles</a></h2>
				<div className="items-list">{items_list}</div>
			</div>
		)
	}
}
