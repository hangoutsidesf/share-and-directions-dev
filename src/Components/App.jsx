import React, { Component } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';

class App extends Component {
	constructor(props) {
		super(props);

		this.parkId = this.props.match.params.parkId || 'home page';
		console.log(isBrowser);
	}
	render() {
		return (
		  <div>
		    <h1>Endpoint: { this.parkId }</h1>
		    <h1>Is mobile? { String(isMobile) }</h1>
		    <h1>Is browser? { String(isBrowser) }</h1>
		  </div>
		);
	}
}

export default App;