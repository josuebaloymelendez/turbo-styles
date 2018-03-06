import React, {Component} from 'react';

export default class UIButton extends Component{
	constructor(props){
		super(props);
		this.state={
			status: "inactive"
		}
	}
	_handleClick(){
		if(this.state.status === "active"){
			this.setState({status: ""});
		} else {
			this.setState({status: "active"});
		}
	}
	render(){
		let {buttonStatus} = this.props;
		let btnStatusClass = buttonStatus ? buttonStatus : this.state.status;
		return(
			<button
				//onClick={()=>{this.props.actionClick(); this._handleClick();}}
				onClick={this.props.actionClick}
				className={`${this.props.defaultClassName} ${btnStatusClass}`}>{this.props.innerText}</button>
		);
	}
}