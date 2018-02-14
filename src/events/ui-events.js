import React, { Component } from 'react';


class UIeventsController extends Component{
	render(){
		return(
			<div className="ui-events">
      		<div className="events-buttons">
	      		<button className="style-button">Date style 1</button>
	      		<button className="style-button">Date style 2</button>
	      		<button className="style-button">Date style 3</button>
	      		<button className="style-button">Date style 4</button>
	      		<button className="style-button">Date style 5</button>
	      		<button className="style-button">Date style 6</button>
      		</div>
      		<div className="events-buttons">
	      		<button className="style-button">Summary style 1</button>
	      		<button className="style-button">Summary style 2</button>
	      		<button className="style-button">Summary style 3</button>
	      		<button className="style-button">Summary style 4</button>
	      		<button className="style-button">Summary style 5</button>
	      		<button className="style-button">Summary style 6</button>
      		</div>
      	</div>
		);
	}
}

export default UIeventsController;