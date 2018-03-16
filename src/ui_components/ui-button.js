import React, {Component} from 'react';

export default class UIButton extends Component{
	constructor(props){
		super(props);
		this.state={
			status: "inactive"
		}
	}
	render(){
		let {buttonStatus} = this.props;
		let btnStatusClass = buttonStatus ? buttonStatus : this.state.status;
		return(
			<button
				onClick={this.props.actionClick}
				className={`${this.props.defaultClassName} ${btnStatusClass}`}>{this.props.innerText}</button>
		);
	}
}