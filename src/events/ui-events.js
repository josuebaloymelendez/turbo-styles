import React, { Component } from 'react';

class UIeventsController extends Component{
	constructor(){
		super();
		this.state = {
			codeImageUrl : "events_images/images/code-image_01.png"
		}
	// }
	render(){
		return(
			<div className="ui-container">
				<div className="ui-column">
	      		<div className="ui-buttons" id="date_shape_btn">
		      		<h2 className="ui-title">Events date shapes & colours</h2>
		      		<button
		      			className="style-button active"
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
		      			onClick={() => { this._changeShape('folded', "04")}}
		      		>Folded date</button>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeShape('cube', "05")}}
		      		>Cube date</button>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeShape('hexagon', "06")}}
		      		>Hexagon date</button>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeShape('mosaic', "06")}}
		      		>Mosaic date</button>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeShape('flag', "06")}}
		      		>Flag date</button>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeShape('prism', "06")}}
		      		>Prism date</button>
		      		<div className="output-code">
		      			<h3 className="code-title">SCSS Code:</h3>
		      			<img className="code-img" alt="" src={this.state.codeImageUrl}/>
		      		</div>
	      		</div>
				</div>
				<div className="ui-column">
	      		<div className="ui-buttons">
		      		<h2 className="ui-title">Events summary colours</h2>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeSummColor('dark')}}
		      		>Dark summary</button>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeSummColor('light')}}
		      		>Light summary</button>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeSummColor('green')}}
		      		>Colored summary</button>
	      		</div>
	      		<div className="ui-buttons">
		      		<h2 className="ui-title">Events summary shape and stroke</h2>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeSummStroke('stroke')}}
		      		>Stroke summary</button>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeSummShape('round')}}
		      		>Round summary</button>
	      		</div>
				</div>
      	</div>
		);
	}
	_changeShape(value, image){
		this.props.changeState(value,  (state, value) => {
			let obj = state.events;
			obj.date.shape = value;
			return obj;
		});
		let path = "events_images/images/code-image_", extension = ".png";
		this.setState({codeImageUrl: path+image+extension});

	}
	_changeSummColor(value){
		this.props.changeState(value,  (state, value) => {
			let obj = state.events;
			obj.summary.color = value;
			return obj;
		});
	}
	_changeSummShape(value){
		this.props.changeState(value,  (state, value) => {
			let obj = state.events;
			obj.summary.shape = value;
			return obj;
		});
	}
	_changeSummStroke(value){
		this.props.changeState(value,  (state, value) => {
			let obj = state.events;
			obj.summary.stroke = value;
			return obj;
		});
	}
}

export default UIeventsController;