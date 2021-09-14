import {
  UPDATE_FIELD,
	UPDATE_SECTION,
	UPDATE_TABS,
	UPDATE_LOADED,
	SET_MESSAGES,
	UPDATE_MESSAGES
} from "../../redux/constants";

export function updateField( data ) {
	return {
		type: UPDATE_FIELD,
		payload: data
	}
}
export function updateSection( data ) {
	return {
		type: UPDATE_SECTION,
		payload: data
	}
}

export function updateTabs( data ) {
	return {
		type: UPDATE_TABS,
		payload: data
	}
}

export function updateLoaded( data ) {
	return {
		type: UPDATE_LOADED,
		payload: data
	}
}

export function setMessages( data ) {
	return {
		type: SET_MESSAGES,
		payload: data
	}
}

export function updateMessages( data ) {
	return {
		type: UPDATE_MESSAGES,
		payload: data
	}
}
