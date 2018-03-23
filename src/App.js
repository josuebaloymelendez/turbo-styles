import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'


import Interface from './ui_menu/ui-interface';

import Events from './events/Events';


import './styles/core.css';

const News = () => (
	<div id="content_main">
	    <h2>NEWS COMPONENT COMING SOON...</h2>
  	</div>
);

const NoMatch = ({ match, location, history }) => {

	return (
		<div id="content_main">
			<h2>Component not found! Probably coming soon... :)</h2>
			{match.path}
			{match.url}
			{console.log(match, location, history)}
		</div>
	);
};

const Initial = () => (
	<div id="content_main"><h2>Welcome to Spike Modules!</h2></div>
);

class App extends Component {
	render() {
		return (
		<Interface>
			<Switch>
				<Route exact path="/" component={Initial}/>
				<Route path="/events" component={Events} />
				<Route path="/news" component={News} />
				<Route component={NoMatch}/>
			</Switch>
		</Interface>
		);
	}
}

export default App;

