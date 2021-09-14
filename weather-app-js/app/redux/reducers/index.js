import {
    combineReducers
} from 'redux';
import auth from './Auth';
import weather from './Weather';
import {
    routerReducer
} from 'react-router-redux';
const GenNextApp = combineReducers({
    auth,
    weather,
    routing: routerReducer,
});
/* eslint no-unused-vars:0 */
const rootReducer = (state, action) => {
    if (action.type === 'REDUX_RESET_STATE') {
        const {
            routing
        } = state
        state = {
            routing
        }
    }
    return GenNextApp(state, action);
}

export default GenNextApp;
