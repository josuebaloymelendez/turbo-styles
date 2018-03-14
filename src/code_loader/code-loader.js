import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css.js';
import 'codemirror/theme/3024-night.css';

export class CodeLoader extends Component{
	render(){
		let {
			name,
			description,
			notes,
			code, 
			syntax
		} = this.props.codeSCSS;

		let options = {
			lineNumbers: true,
			mode: syntax,
			value: code,
			theme: '3024-night'
		};
		return(
			<div className="output-code">
				<h3 className="code-title">{name}</h3>
				<p className="code-description">{description}</p>
				<div className="code-description"><small>SCSS code:</small></div>
				<CodeMirror
					options={options}
				/>
				<p className="code-notes">{notes}</p>
			</div>
		);
	}
}