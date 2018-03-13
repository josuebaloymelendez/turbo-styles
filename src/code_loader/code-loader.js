import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import "./codemirror.css";

export class CodeLoader extends Component{
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
		let options = {
			lineNumbers: true,
			mode: CSS,
			value: this.state.code,
			theme: "3024-night"
		};
		let code = <CodeMirror options={options} />;
		let code2 = <code className="code-box">{this.state.code}</code>;
		return(
			<div className="output-code">
				<h3 className="code-title">{codeTitle}</h3>
				<p className="code-description">{codeDescription}</p>
				<div><small>SCSS code:</small></div>
				{code}
				<p className="code-notes">{codeNotes}</p>
			</div>
		);
	}
}


export class CodeLoaderFS extends Component{
	render(){
		let fs_output = "";
		let fs = require('fs');
		try{
			fs.copy('../styles/core.css', fs_output);
			console.log("success");
		}catch(err){
			fs_output = "file doesn't exist";
			console.log(err);
		}
		return(
			<div className="output-code">
				<h3 className="code-title">{fs_output}</h3>
			</div>
		);
	}
}
