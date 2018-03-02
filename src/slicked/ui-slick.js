import React, {Component} from 'react';

export default class UIslickController extends Component{
	render(){
		return(
			<div className="ui-container">
				<div className="ui-buttons">
					<h2 className="ui-title">Number of slides on large display</h2>
					<button
						onClick={() => {this._changeSlickSlides('large',1)}}
						className="style-button">1</button>
					<button
						onClick={() => {this._changeSlickSlides('large',2)}}
						className="style-button">2</button>
					<button
						onClick={() => {this._changeSlickSlides('large',3)}}
						className="style-button">3</button>
					<button
						onClick={() => {this._changeSlickSlides('large',4)}}
						className="style-button">4</button>
				</div>
			</div>
		);
	}
	_changeSlickSlides(vpName, number){
		//this.props.changeSlidesNumber(vpName,number);
	}
}