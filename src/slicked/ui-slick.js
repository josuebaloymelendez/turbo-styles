import React, {Component} from 'react';
import UIButton from '../ui_components/ui-button';

export default class UIslickController extends Component{
	_changeSlickTotal(key, value){
		this.props.changeState(value,  (state, value) => {
			let obj = state.slick.total[key] = value;
			return obj;
		});
	}
	_toggleProperty(key){
		let toggle = this.props.slickSettings[key] ? false : true;
		this.props.changeState(toggle, (state, toggle)=>{
			let obj = state.slick[key] = toggle;
			return obj;
		});
	}
	render(){
		return(
			<div className="ui-container">
				<div ui-column>
					<div className="ui-buttons">
						<h2 className="ui-title">Number of slides on large display</h2>
						<UIButton
							defaultClassName="style-button"
							innerText="1"
							actionClick={() => {this._changeSlickTotal('large',1)}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="2"
							actionClick={() => {this._changeSlickTotal('large',2)}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="3"
							actionClick={() => {this._changeSlickTotal('large',3)}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="4"
							actionClick={() => {this._changeSlickTotal('large',4)}}
						/>
					</div>
					<div className="ui-buttons">
						<h2 className="ui-title">Number of slides on large display</h2>
						<UIButton
							defaultClassName="style-button"
							innerText="Dots"
							actionClick={()=>{this._toggleProperty('dots')}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="Fade"
							actionClick={()=>{this._toggleProperty('fade')}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="Arrows"
							actionClick={()=>{this._toggleProperty('arrows')}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="Center Mode"
							actionClick={()=>{this._toggleProperty('centerMode')}}
						/>
					</div>
				</div>
			</div>
		);
	}
}