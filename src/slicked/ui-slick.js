import React, {Component} from 'react';
import UIButton from '../ui_components/ui-button';

export default class UIslickController extends Component{

	_changeSlidesToShow(value){
		this.props.changeState(value,  (state, value) => {
			let obj = state.slick.slidesToShow= value;
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
		let slidesNumButtons = [];
		for(let i=1; i <= this.props.slidesNum; i++){
			slidesNumButtons.push(
				<UIButton
					key={i}
					defaultClassName="style-button"
					innerText={i}
					actionClick={() =>{this._changeSlidesToShow(i)}}
				/>
			);
		}

		return(
			<div className="ui-container">
				<div className="ui-column">
					<div className="ui-buttons">
						<h2 className="ui-title">Change slidesToShow</h2>
						{slidesNumButtons}
					</div>
				</div>
				<div className="ui-column">
					<div className="ui-buttons">
						<h2 className="ui-title">Toggle slick extras</h2>
						<UIButton
							defaultClassName="style-button"
							innerText="dots"
							actionClick={()=>{this._toggleProperty('dots')}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="fade"
							actionClick={()=>{this._toggleProperty('fade')}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="arrows"
							actionClick={()=>{this._toggleProperty('arrows')}}
						/>
					</div>
					<div className="ui-buttons">
						<h2 className="ui-title">Toggle slick behavior</h2>
						<UIButton
							defaultClassName="style-button"
							innerText="centerMode"
							actionClick={()=>{this._toggleProperty('centerMode')}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="vertical"
							actionClick={()=>{this._toggleProperty('vertical')}}
						/>
						<UIButton
							defaultClassName="style-button"
							innerText="adaptiveHeight"
							actionClick={()=>{this._toggleProperty('adaptiveHeight')}}
						/>
					</div>
				</div>
			</div>
		);
	}
}