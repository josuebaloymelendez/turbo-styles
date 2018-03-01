import React, { Component } from 'react';

class UIeventsController extends Component{
	constructor(){
		super();
		this.state = {
			codeImageUrl : "events_images/images/code-image_01.png"
		}
	}
	render(){
		return(
			<div className="ui-container">
      		<div className="ui-buttons">
	      		<h2 className="ui-title">Events date shapes & colours</h2>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape("events", 'square', "01")}}
	      		>Square date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('events', 'circle', "02")}}
	      		>Circle date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('events.date.shape', 'rombus', "03")}}
	      		>Rombus date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('events.date.shape', 'frame', "04")}}
	      		>Frame date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('events.date.shape', 'cube', "05")}}
	      		>Cube date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('events.date.shape', 'hexagon', "06")}}
	      		>Hexagon date</button>
	      		<div className="output-code">
	      			<h3 className="code-title">SCSS Code:</h3>
	      			<img className="code-img" alt="" src={this.state.codeImageUrl}/>
	      		</div>
      		</div>
      		<div className="ui-buttons">
	      		<h2 className="ui-title">Events summary shape & colours</h2>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeSummCol('events-summary-color', 'dark')}}
	      		>Dark summary</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeSummCol('events-summary-color','light')}}
	      		>Light summary</button>
      		</div>
      	</div>
		);
	}
	_changeShape(key, value, image){
		this.props.changeState(key, value,  (state, value) => {
			let obj = state.events;
			obj.date.shape = value;
			return obj;
		});
		let path = "events_images/images/code-image_", extension = ".png";
		this.setState({codeImageUrl: path+image+extension});
	}
	_changeSummCol(key, value){
		this.props.changeState(key, value)
	}
}

export default UIeventsController;