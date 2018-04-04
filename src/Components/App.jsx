import React, { Component } from 'react';


class App extends Component {
	constructor(props) {
		super(props);

		this.parkId = this.props.match.params.parkId || 'home page';
		console.log(this.props.match);
	}
	render() {
		return (
		  <div>
		    <h1>{ this.parkId }</h1>
		  </div>
		);
	}
}

export default App;