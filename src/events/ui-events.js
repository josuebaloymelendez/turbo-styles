import React, { Component } from 'react';

class UIeventsController extends Component{
	render(){
		return(
			<div className="ui-events">
      		<div className="events-buttons">
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('circle')}}
	      		>Circle date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('square')}}
	      		>Square date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('rombus')}}
	      		>Rombus date</button>
      		</div>
      		<div className="events-buttons">
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeSummaryColor('dark')}}
	      		>Dark summary</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeSummaryColor('light')}}
	      		>Light summary</button>
      		</div>
      	</div>
		);
	}
	_changeShape(shape){
		this.props.changeEventdateShape(shape);
	}
	_changeSummaryColor(color){
		this.props.changeEventdateShape(color);
	}
}

export default UIeventsController;