import React, {Component} from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sass/sass.js';
import 'codemirror/theme/3024-night.css';

export class CodeLoader extends Component{
	render(){
		//console.log("check for changes!",this.props.codeSCSS);
		let {
			name,
			description,
			notes,
			code, 
			syntax
		} = this.props.codeToOutput;

		let options = {
			lineNumbers: true,
			mode: syntax,
			theme: '3024-night'
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