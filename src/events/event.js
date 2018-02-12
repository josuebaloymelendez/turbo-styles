import React, { Component } from 'react';
import EventItem from 'event-item';

export class EventsList extends React.Component{
	render(){
		let events_list = [];
		for(let i=1; i<8; i++){
			events_list.push(<EventItem/>);
		}
		return(
			<div className="items-list">events_list</div>
		)
	}
}