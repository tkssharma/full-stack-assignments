import * as Action from '../../redux/actions';
import StorageAPI from '../../redux/api/Storage';

export default {
	updatePassword(values) {
		return dispatch => {
			console.log(values);
			setTimeout( () => {
				dispatch( Action.uiProcessingChangeUpdatePassword(false) );
				StorageAPI.user.setHasPassword(true);
			}, 1000);
			setTimeout( () => {
				dispatch( Action.uiModalsChangeUpdatePassword(false) );
			}, 1500);
		}
	},
}

