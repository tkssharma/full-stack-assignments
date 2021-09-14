'use strict';

import { browserHistory } from 'react-router';

let Helper = {
	user: {

		avatar: (link) => {
			if ( link ) { return link; }
			else { return '/images/avatar.png'; }
		},

	}
}


export default Helper;
