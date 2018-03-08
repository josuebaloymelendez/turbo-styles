import React, {Component} from 'react';

export default class CodeLoader extends Component{
	constructor(){
		super();
		this.state = {
			code : ""
		}
	}
	_readTextFile(path){
		return new Promise((resolve,reject)=>{
			let request = new XMLHttpRequest();
			request.open('GET', path, true);
			request.onload = () => {
				if(request.status >= 200 && request.status < 400){
					resolve(request.response);
				} else {
					reject(new Error (request.status));
				}
			};
			request.onerror = () =>{
				reject(new Error("the file doesnt exist"));
			}
			request.send();
		});
	}
	_getResults(path){
		this._readTextFile(path)
			.then((results)=>{
				this.setState({code: results});
			})
			.catch((error)=>{
				this.setState({code: error});
			});
	}
	render(){
		let {codeTitle, codeDescription, codePath, codeNotes} = this.props;
		this._getResults(codePath);
		//console.log(this.state.code);
		return(
			<div className="output-code">
				<h3 className="code-title">{codeTitle}</h3>
				<p className="code-description">{codeDescription}</p>
				<code className="code-box">{this.state.code}</code>
				<p className="code-notes">{codeNotes}</p>
			</div>
		);
	}
}
