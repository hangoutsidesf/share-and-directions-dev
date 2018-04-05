import React from 'react';
import copy from 'copy-to-clipboard';
import { isBrowser, isMobile } from 'react-device-detect';

export default props => {

	const handler = event => {
		const url = `${window.location.origin}/${props.parkId}`;

		if(isBrowser) {
			const display = document.querySelectorAll('.copied');
			copy(url);

			display.forEach(node => {
				node.textContent = 'Link copied.';
			});
		} else {
			// insert mobile stuff here
		}
	};


	return <button onClick={handler}>Share</button>;
}