import React, { Component } from 'react';

class UIeventsController extends Component{
	render(){
		return(
			<div className="ui-buttons">
      		<div className="events-buttons">
	      		<h2 className="category-title">Events date shapes & colours</h2>
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
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('frame')}}
	      		>Frame date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('cube')}}
	      		>Cube date</button>
      		</div>
      		<div className="events-buttons">
	      		<h2 className="category-title">Events summary shape & colours</h2>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeSummCol('dark')}}
	      		>Dark summary</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeSummCol('light')}}
	      		>Light summary</button>
      		</div>
      	</div>
		);
	}
	_changeShape(shape){
		this.props.changeEventdateShape(shape);
	}
	_changeSummCol(color){
		this.props.changeSummaryColor(color);
	}
}

export default UIeventsController;