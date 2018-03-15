import React, {Component} from 'react';
import UIButton from '../ui_components/ui-button';
import {CodeLoader} from '../code_loader/code-loader';
import {readTextFile} from '../code_loader/request-file';

export default class UIeventsController extends Component{
	constructor(){
		super();
		this.state = {
			codeSCSS : {
				name: 'alt-1',
				description: "Rhombus cuts summary",
				notes: "Changes the whole item",
				code: "Loading...",
				syntax: "sass"
			}
		}

		this._getCode("https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss");
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
	_changeAlt(value){
		this.props.changeState(value, (state, value) => {
			let obj = state.events.unconventional.name = value.name;
			return obj;
		})
		this.setState({ codeSCSS:{
			name: value.name,
			description: value.description,
			notes: value.notes,
			code: "loading...",
			syntax: "sass"
		}});

		this._getCode(value.path);
	}
	render(){
		let event_alts = [
			{
				name: 'alt-1', 
				description: "Rhombus cuts summary",
				notes: "Changes the whole item",
				path: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a456456730c7dd93f4904a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss"
			}, 
			{
				name: 'alt-2', 
				description: "Cut by diagonal",
				notes: "Changes the whole item",
				path: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd45645693f4904a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss"
			}, 
			{
				name: 'alt-3', 
				description: "Card with floating date bubble",
				notes: "Changes the whole item",
				path: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904456456a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss"
			},
			{
				name: 'alt-4', 
				description: "Capsuled date floating",
				notes: "Changes the whole item",
				path: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss"
			},
			{
				name: 'alt-5', 
				description: "Box with vertical date",
				notes: "Changes the whole item",
				path: "https://gist.githubusercontent.com/Turbosaurio/df14756d2a5a730c7dd93f4904a5f2aa/raw/c76048807e9ad96b9657c6449d2b2eec2141f727/circle.scss"
			}
		];
		let event_alts_buttons = [];
		for (let i = 0; i < event_alts.length; i++){
			event_alts_buttons.push(
				<UIButton
					key={i}
					defaultClassName="style-button"
					buttonStatus=""
					innerText={`${event_alts[i].name} event item shape`}
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
						<CodeLoader codeToOutput={this.state.codeSCSS} />
					</div>
				</div>
			</div>
		);
	}
}