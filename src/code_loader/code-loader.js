import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import "./codemirror.css";

export class CodeLoader extends Component{
	render(){
		let {
			name,
			description,
			notes,
			code, 
			syntax
		} = this.props.codeState;

		let options = {
			lineNumbers: true,
			mode: syntax,
			value: code,
			theme: "3024-night"
		};
		return(
			<div className="output-code">
				<h3 className="code-title">{name}</h3>
				<p className="code-description">{description}</p>
				<div className="code-description"><small>SCSS code:</small></div>
				<CodeMirror
					options={options}
					value={code}
				/>
				<p className="code-notes">{notes}</p>
			</div>
		);
	}
}


// export class CodeLoaderFS extends Component{
// 	render(){
// 		let fs_output = "";
// 		let fs = require('fs');
// 		try{
// 			fs.copy('../styles/core.css', fs_output);
// 			console.log("success");
// 		}catch(err){
// 			fs_output = "file doesn't exist";
// 			console.log(err);
// 		}
// 		return(
// 			<div className="output-code">
// 				<h3 className="code-title">{fs_output}</h3>
// 			</div>
// 		);
// 	}
// }
