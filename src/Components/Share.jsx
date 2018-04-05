import React from 'react';
import copy from 'copy-to-clipboard';
import { isBrowser, isMobile } from 'react-device-detect';

const handler = () => {
	console.log(window.location);
	const url = `${window.location.origin}${window.location.pathname}`;

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

export default props => {
	if(isBrowser) {
		return <button onClick={handler}>Share</button>;
	} else {
		return (
			<form action={`sms:;body=${window.location.origin}${window.location.pathname}`}>
				<button>Share</button>
			</form>
		);
	}
}