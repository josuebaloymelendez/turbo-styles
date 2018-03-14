import React, { Component } from 'react';
import UIButton from '../ui_components/ui-button';
import {CodeLoader} from '../code_loader/code-loader';
import {readTextFile, readTextFileFS} from '../code_loader/request-file';
import './events.css';

class UIeventsController extends Component{
	constructor(){
		super();
		this.state = {
			codeSCSS : {
				name: 'square',
				description: 'Square shaped event date, $date-width and $date-height can be redefined, the rest of the summary ocuppies the rest of the width',
				notes: 'Background color and fonts color need further styling ',
				code: this._getCode("https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss"),
				syntax: "CSS"
			}
		}
	}
	_getCode(path){
		readTextFile(path)
		.then((result) => {
			this.setState({ codeSCSS: {...this.state.codeSCSS, code: result }})
		})
		.catch((error) => {
			this.setState({ codeSCSS: {...this.state.codeSCSS, code: "not-found" }})
		});
	}


	_changeShape(value){
		this.props.changeState(value,  (state, value) => {
			let obj = state.events.date.shape = value.name;
			return obj;
		});
		this.setState({codeSCSS:{
			name: value.name,
			description: value.description,
			notes: value.notes,
			code: this._getCode(value.path),
			syntax: "CSS"
		}});
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
		readTextFileFS();
		let date_shape_code = [
			{
				name: "square", 
				description: "Square shaped event date, $date-width and $date-height can be redefined, the rest of the summary ocuppies the rest of the width",
				notes: "Background color and fonts color need further styling ",
				path: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss"
			}, 
			{
				name: "circle", 
				description: "Simple circle shaped made with border radius, has flex none",
				notes: "Background color and fonts color need further styling ",
				path: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss"
			},
			{
				name: "rhombus-v", 
				description: "Simple rhombus shaped divided vertically made with border radius, has flex none",
				notes: "Background color and fonts color need further styling ",
				path: "http://asdasd.com"
			}, 
			{
				name: "rhombus-h", 
				description: "Simple rhombus shaped divided horizontally made with border radius, has flex none",
				notes: "Background color and fonts color need further styling ",
				path: ""
			},
			{
				name: "folded", 
				description: "Simple circle shaped made with border radius, has flex none",
				notes: "Background color and fonts color need further styling ",
				path: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss"
			}, 
			{
				name: "cube", 
				description: "Simple circle shaped made with border radius, has flex none",
				notes: "Background color and fonts color need further styling ",
				path: "https://gist.githubusercontent.com/Turbosaurio/c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss"
			},
			{
				name: "hexagon", 
				description: "Simple circle shaped made with border radius, has flex none",
				notes: "Background color and fonts color need further styling ",
				path: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss"
			}, 
			{
				name: "mosaic", 
				description: "Simple circle shaped made with border radius, has flex none",
				notes: "Background color and fonts color need further styling ",
				path: "https://gist.githubusercontent.com/Turbosaurio/c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss"
			},
			{
				name: "flag", 
				description: "Simple circle shaped made with border radius, has flex none",
				notes: "Background color and fonts color need further styling ",
				path: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss"
			}, 
			{
				name: "prism", 
				description: "Simple circle shaped made with border radius, has flex none",
				notes: "Background color and fonts color need further styling ",
				path: "https://gist.githubusercontent.com/Turbosaurio/c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss"
			}
		];

		let date_shapeBtns = [];
		for(let i = 0; i < date_shape_code.length; i++){
			date_shapeBtns.push(
				<UIButton
					key={i}
					defaultClassName="style-button"
					buttonStatus=""
					innerText={`${date_shape_code[i].name} date shape`}
					actionClick={()=>{this._changeShape(date_shape_code[i])}}
				/>
			)
		}
		return(
			<div className="ui-container">
				<div className="ui-column">
	      		<div className="ui-buttons" id="date_shape_btn">
		      		<h2 className="ui-title">Events date shapes</h2>
		      		{date_shapeBtns}
		      		<CodeLoader codeSCSS={this.state.codeSCSS} />
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