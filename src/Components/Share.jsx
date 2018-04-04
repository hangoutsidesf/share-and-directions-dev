import React from 'react';


export default props => {

	const handler = event => {
		console.log(window.location.origin, props.parkId);
	};


	return <button onClick={handler}>Share</button>;
}