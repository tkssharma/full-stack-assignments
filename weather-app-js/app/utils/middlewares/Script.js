import * as AuthMiddleware from '../../utils/middlewares/AuthMiddleware';
import {message} from 'antd';

function loadBraintreeScripts(nextState, replace, done) {

	AuthMiddleware.authenticatedUsersOnly(nextState, replace);

	let loaded = 0;
	let infoMessage = message.info('Loading braintree scripts, pleas wait....', 0);

	let callback = () => {
		console.log('called');
		if (loaded === 2) {
			infoMessage();
			done();
		}
	}

	let script = document.createElement('script');
	script.src = 'https://js.braintreegateway.com/web/3.3.0/js/client.min.js';
	script.async = true;
	script.onload = () => {
		loaded++;
		callback();
	}
	document
		.head
		.appendChild(script);

	let scriptDos = document.createElement('script');
	scriptDos.src = 'https://js.braintreegateway.com/web/3.3.0/js/hosted-fields.min.js';
	scriptDos.async = true;
	scriptDos.onload = () => {
		loaded++;
		callback();
	}
	document
		.head
		.appendChild(scriptDos);

}

export {loadBraintreeScripts};
