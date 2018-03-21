import React, {Component} from 'react';

export default class ItemsList extends Component{
	render(){
		let {contents, class_name} = this.props;
		return(
			<div className={`items-list ${class_name}`}>{contents}</div>
		);
	}
}