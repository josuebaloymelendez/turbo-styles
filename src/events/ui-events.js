import React, { Component } from 'react';
import UIButton from '../ui_components/ui-button';
import {CodeLoader, CodeLoaderFS} from '../code_loader/code-loader';
import './events.css';

class UIeventsController extends Component{
	constructor(){
		super();
		this.state = {
			codeName: 'square',
			codeDescription: 'Square shaped event date, $date-width and $date-height can be redefined, the rest of the summary ocuppies the rest of the width',
			codeNotes: 'Background color and fonts color need further styling ',
			codePath: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss"
		}
	}
	_changeShape(value, path){
		this.props.changeState(value,  (state, value) => {
			let obj = state.events;
			obj.date.shape = value;
			return obj;
		});
		let initialPath = "https://gist.githubusercontent.com/Turbosaurio/";
		this.setState({
			codePath: initialPath+path
		});
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
	render(){
		let date_shape_code = [
			{
				shape: 'square', 
				description: 'Square shaped event date, $date-width and $date-height can be redefined, the rest of the summary ocuppies the rest of the width',
				notes: 'Background color and fonts color need further styling ',
				codeUrl: "df14756d2a5a730c7dd93f4904a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss"}, 
			{
				shape: 'circle', 
				codeUrl: "df14756d2a5a730c7dd93f4904a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss"},
			{
				shape: 'rhombus-v', 
				codeUrl: "df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss"}, 
			{
				shape: 'rhombus-h', 
				codeUrl: "c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss"},
			{
				shape: 'folded', 
				codeUrl: "df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss"}, 
			{
				shape: 'cube', 
				codeUrl: "c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss"},
			{
				shape: 'hexagon', 
				codeUrl: "df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss"}, 
			{
				shape: 'mosaic', 
				codeUrl: "c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss"},
			{
				shape: 'flag', 
				codeUrl: "df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss"}, 
			{
				shape: 'prism', 
				codeUrl: "c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss"}
		];

		let date_shapeBtns = [];
		for(let i=0; i<date_shape_code.length; i++){
			//let active = i === 0 ? "active" : "";
			let numstring = i<10 ? "0"+(i+1) : i+"";
			date_shapeBtns.push(
				<UIButton
					key={i}
					defaultClassName="style-button"
					buttonStatus=""
					innerText={`${date_shape_code[i].shape} date shape`}
					actionClick={()=>{this._changeShape(
						date_shape_code[i].shape, 
						date_shape_code[i].codeUrl
					)}}
				/>
			)
		}
		return(
			<div className="ui-container">
				<div className="ui-column">
	      		<div className="ui-buttons" id="date_shape_btn">
		      		<h2 className="ui-title">Events date shapes & colours</h2>
		      		{date_shapeBtns}

		      		<CodeLoader
		      			codeTitle={this.state.codeName}
		      			codeDescription={this.state.codeDescription}
		      			codePath={this.state.codePath}
		      			codeNotes={this.state.codeNotes}
		      		/>
		      		<CodeLoaderFS/>

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
}

export default UIeventsController;