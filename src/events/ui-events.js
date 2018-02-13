import React, { Component } from 'react';


class UIeventsController extends Component{
	render(){
		return(
			<div className="ui-events">
      		<div class="events-buttons">
	      		<button class="style-button">Date style 1</button>
	      		<button class="style-button">Date style 2</button>
	      		<button class="style-button">Date style 3</button>
	      		<button class="style-button">Date style 4</button>
	      		<button class="style-button">Date style 5</button>
	      		<button class="style-button">Date style 6</button>
      		</div>
      		<div class="events-buttons">
	      		<button class="style-button">Summary style 1</button>
	      		<button class="style-button">Summary style 2</button>
	      		<button class="style-button">Summary style 3</button>
	      		<button class="style-button">Summary style 4</button>
	      		<button class="style-button">Summary style 5</button>
	      		<button class="style-button">Summary style 6</button>
      		</div>
      	</div>
		);
	}
}

export default UIeventsController;