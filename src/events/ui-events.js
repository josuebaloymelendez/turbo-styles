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
			<div className="ui-buttons">
      		<div className="events-buttons">
	      		<h2 className="category-title">Events date shapes & colours</h2>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('square', "01")}}
	      		>Square date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('circle', "02")}}
	      		>Circle date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('rombus', "03")}}
	      		>Rombus date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('frame', "04")}}
	      		>Frame date</button>
	      		<button
	      			className="style-button"
	      			onClick={() => { this._changeShape('cube', "05")}}
	      		>Cube date</button>
	      		<div className="output-code">
	      			<h3 className="code-title">SCSS Code:</h3>
	      			<img className="code-img" alt="" src={this.state.codeImageUrl}/>
	      		</div>
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
	_changeShape(shape, image){
		this.props.changeEventdateShape(shape);
		let path = "events_images/images/code-image_", extension = ".png";
		this.setState({codeImageUrl: path+image+extension});
	}
	_changeSummCol(color){
		this.props.changeSummaryColor(color);
	}
}

export default UIeventsController;