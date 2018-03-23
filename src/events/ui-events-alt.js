import React, {Component} from 'react';
import UIButton from '../ui_components/ui-button';
import {event_alts} from '../constants/events_objects';
import {CodeLoader} from '../code_loader/code-loader';
import {getCode} from '../code_loader/request-file';

export default class UIeventsController extends Component{
	constructor(){
		super();
		this.state = {
			dateCode: {...event_alts[0], syntax: "sass", code: "Loading.........."},
		}
		getCode(event_alts[0].path, "date", "code",this);
		
		
	}
	_changeAlt(value){
		this.props.changeState(value, (state, value) => {
			let obj = state.events.unconventional.name = value.name;
			return obj;
		})
		this.setState({ dateCode:{
			name: value.name,
			description: value.description,
			notes: value.notes,
			code: "loading...",
			syntax: "sass"
		}});
		getCode(value.path,"dateCode","code",this);
	}

	render(){
		let event_alts_buttons = [];
		for (let i = 0; i < event_alts.length; i++){
			event_alts_buttons.push(
				<UIButton
					key={i}
					defaultClassName="style-button"
					buttonStatus=""
					innerText={event_alts[i].name}
					actionClick={() => {this._changeAlt(event_alts[i])}}
				/>
			);
		}
		return(
			<div className="ui-container">
				<div className="ui-column">
					<div className="ui-buttons">
					<h2 className="ui-title">Number of slides on large display</h2>
						{event_alts_buttons}
						<CodeLoader codeToOutput={this.state.dateCode} />
					</div>
				</div>
			</div>
		);
	}
}