import React, { Component } from 'react';
import UIButton from '../ui_components/ui-button';
import CodeLoader from '../code_loader/code-loader';
import './events.css';

class UIeventsController extends Component{
	constructor(){
		super();
		this.state = {
			codeImageUrl : "events_images/images/code-image_01.png",
		}
	}
	render(){
		let  date_shape = ["square", "circle", "rombus","rombus-horizontal", "folded", "cube", "hexagon", "mosaic", "flag", "prism","clip"],
				date_shapeBtns = [];
		for(let i=0; i<date_shape.length; i++){
			//let active = i === 0 ? "active" : "";
			let numstring = i<10 ? "0"+(i+1) : i+"";
			date_shapeBtns.push(
				<UIButton
					key={i}
					defaultClassName="style-button"
					buttonStatus=""
					innerText={`${date_shape[i]} date shape`}
					actionClick={()=>{this._changeShape(date_shape[i], numstring)}}
				/>
			)
		}
		return(
			<div className="ui-container">
				<div className="ui-column">
	      		<div className="ui-buttons" id="date_shape_btn">
		      		<h2 className="ui-title">Events date shapes & colours</h2>
		      		{date_shapeBtns}

		      		<div className="output-code">
		      			<h3 className="code-title">SCSS Code:</h3>
		      			<img className="code-img" alt="" src={this.state.codeImageUrl}/>
		      		</div>

		      		<CodeLoader
		      			codeTitle="SCSS Code:"
		      			codeDescription="Codigo bonite"
		      			codePath="baby.txt"
		      			codeNotes="Codigo notes"
		      		/>

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
	      			<h2 className="ui-title">Stroke</h2>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeSummStroke('stroke')}}
		      		>Stroke summary</button>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeSummStroke('round')}}
		      		>Round summary</button>
	      		</div>
	      		<div className="ui-buttons">
		      		<h2 className="ui-title">Events summary shape</h2>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeSummShape('prism')}}
		      		>Prism summary</button>
		      		<button
		      			className="style-button"
		      			onClick={() => { this._changeSummShape('clip')}}
		      		>Clip summary</button>
	      		</div>
	      		<div className="ui-buttons">
		      		<h2 className="ui-title">Events summary extras</h2>
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