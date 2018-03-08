import React, { Component } from 'react';
import UIButton from '../ui_components/ui-button';
import CodeLoader from '../code_loader/code-loader';
import './events.css';

class UIeventsController extends Component{
	constructor(){
		super();
		this.state = {
			codeImageUrl : "events_images/images/code-image_01.png",
			codePath: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904a5f2aa/raw/837a8554117a23a7b02fa950d16a1978dce3de9b/babby.scss"
		}
	}
	render(){
		let  date_shape = ["square", "circle", "rombus","rombus-horizontal", "folded", "cube", "hexagon", "mosaic", "flag", "prism","clip"],
				date_path = [
					"df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss",
					"c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss",
					"df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss",
					"c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss",
					"df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss",
					"c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss",
					"df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss",
					"c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss",
					"df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss",
					"c0cb78fb408bbcd2e5f0867b125c54f4/raw/ee17987052f3c649e883df11da83d3926929717f/jungen.scss",
					"df14756d2a5a730c7dd93f4904a5f2aa/raw/e6f265e1e85446f329e0218f3600a7b584fc23eb/babby.scss"
				],
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
					actionClick={()=>{this._changeShape(date_shape[i], numstring,date_path[i])}}
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
		      			codeTitle="SCSS Code:"
		      			codeDescription="Codigue description"
		      			codePath={this.state.codePath}
		      			codeNotes="Codigue notes"
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
	_changeShape(value, image, path){
		this.props.changeState(value,  (state, value) => {
			let obj = state.events;
			obj.date.shape = value;
			return obj;
		});
		let gist = "https://gist.githubusercontent.com/Turbosaurio/";
		this.setState({codePath: gist+path});
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