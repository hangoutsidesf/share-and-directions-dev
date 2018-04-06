import React, { Component } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import iOS from 'is-ios';
import Share from './Share';

class App extends Component {
	constructor(props) {
		super(props);

		this.parkId = this.props.match.params.parkId || 'home page';
		console.log(window.location.href);
	}
	render() {
		return (
		  <div>
		    <h1>Endpoint: { this.parkId }</h1>
		    <h1>Is mobile? { String(isMobile) }</h1>
		    <h1>Is iOS? { String(iOS) }</h1>
		    <h1>Is browser? { String(isBrowser) }</h1>
		    <Share parkId={this.parkId} />
		    <h1 className="copied"></h1>
		  </div>
		);
	}
}

export default App;