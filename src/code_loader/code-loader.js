import React, {Component} from 'react';
export default class CodeLoader extends Component{
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
		return this._readTextFile(path)
			.then((results)=>{
				console.log(results);
			})
			.catch((error)=>{
				console.log(error);
			});
	}
	render(){
		let {codeTitle, codeDescription, codePath, codeNotes} = this.props;
		this._getResults(codePath);
		return(
			<div className="output-code">
				<h3 className="code-title">{codeTitle}</h3>
				<p className="code-description">{codeDescription}</p>
				<code></code>
				<p className="code-notes">{codeNotes}</p>
			</div>
		);
	}
}
