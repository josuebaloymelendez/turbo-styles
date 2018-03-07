import React, {Component} from 'react';
import UIButton from '../ui_components/ui-button';

export default class UIeventsController extends Component{
	_changeAlt(value, property){
		this.props.changeState(value, (state, value) => {
			let obj = state.events;
			obj[property] = value;
			return obj;
		})
	}
	render(){
		return(
			<div className="ui-container">
				<div className="ui-column">
					<div className="ui-buttons">
					<h2 className="ui-title">Number of slides on large display</h2>
						<UIButton
							defaultClassName="style-button"
							innerText="Rhombus cuts summary"
							actionClick={()=>{this._changeAlt("alt-1", "altEvents")}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="Cut by diagonal"
							actionClick={()=>{this._changeAlt("alt-2", "altEvents")}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="Card with floating date bubble"
							actionClick={()=>{this._changeAlt("alt-3", "altEvents")}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="Capsuled date floating"
							actionClick={()=>{this._changeAlt("alt-4", "altEvents")}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="Capsuled date floating"
							actionClick={()=>{this._changeAlt("alt-5", "altEvents")}}
						/>
						<div className="output-code">
		      			<h3 className="code-title">SCSS Code:</h3>
		      			<img className="code-img" alt="" src=""/>
		      		</div>
					</div>
				</div>
			</div>
		);
	}
}