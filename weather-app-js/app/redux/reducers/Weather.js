/* eslint default-case:0 */
import {
    FETCH_WEATHER,
    FETCH_WEATHER_PROGRESS,
    FETCH_WEATHER_COMPLETE

} from '../../redux/constants';

import Immutable from 'immutable';

const application_default_data = Immutable.Map({
		loaded: false,
        in_progress: false,
        data : null
    });

function weather( weather = application_default_data, action ) {

	if ( action.type === FETCH_WEATHER ) {
		return weather.setIn(['data'], action.payload );
	}
	else if ( action.type === FETCH_WEATHER_PROGRESS ) {
		return weather.setIn(['loaded'], false );
	}
	else if ( action.type === FETCH_WEATHER_COMPLETE ) {
		return weather.setIn(['loaded'], true );
	}
	else {
		return weather;
	}
}


export default weather;
