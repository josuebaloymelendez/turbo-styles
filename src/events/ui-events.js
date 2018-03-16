import React, { Component } from 'react';
import UIButton from '../ui_components/ui-button';
import {date_shape_code, summary_shape_code} from '../constants/events_objects';
import {CodeLoader} from '../code_loader/code-loader';
import {readTextFile, getCode} from '../code_loader/request-file';
import './events.css';

class UIeventsController extends Component{
	constructor(){
		super();
		this.state = {
			dateCode: {...date_shape_code[0], syntax: "sass", code: "Loading.........."},
			summaryCode: {...summary_shape_code[0], syntax: "sass", code: "Loading.........."},
		}
		getCode(date_shape_code[0].path, "date", "code",this);
		getCode(summary_shape_code[0].path, "summary", "code",this);
	}
	_changeShape(value, key){
		this.props.changeState(value, (state, value) => {
			let obj = state.events.conventional[key].shape =value.name;
			return obj;
		});
		this.setState({[value+"Code"]:{
			name: value.name,
			description: value.description,
			notes: value.notes,
			syntax: "sass"
		}});
		getCode(value.path, key+"Code", "code",this);
	}

	render(){

		let date_shapeBtns = [];
		for(let i = 0; i < date_shape_code.length; i++){
			date_shapeBtns.push(
				<UIButton
					key={i}
					defaultClassName="style-button"
					buttonStatus=""
					innerText={date_shape_code[i].name}
					actionClick={()=>{this._changeShape(date_shape_code[i],"date", "code")}}
				/>
			)
		}
		let summary_shapeBtns = [];
		for(let i = 0; i < summary_shape_code.length; i++){
			summary_shapeBtns.push(
				<UIButton
					key={i}
					defaultClassName="style-button"
					buttonStatus=""
					innerText={summary_shape_code[i].name}
					actionClick={()=>{this._changeShape(summary_shape_code[i],"summary", "code")}}
				/>
			)
		}

		return(
			<div className="ui-container">
				<div className="ui-column">
	      		<div className="ui-buttons">
		      		<h2 className="ui-title">Events date shapes</h2>
		      		{date_shapeBtns}
		      		<CodeLoader codeToOutput={this.state.dateCode} />
		      	</div>
				</div>
				<div className="ui-column">
	      		<div className="ui-buttons">
		      		<h2 className="ui-title">Events summary shape</h2>
		      		{summary_shapeBtns}
		      		<CodeLoader codeToOutput={this.state.summaryCode} />
	      		</div>
				</div>
      	</div>
		);
	}
}

export default UIeventsController;