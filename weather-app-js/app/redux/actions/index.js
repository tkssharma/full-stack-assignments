import {
  REDUX_RESET_STATE,
  AUTH_UPDATE_LOGIN_FORM_FIELD,
  AUTH_SUBMIT_LOGIN_FORM,
  AUTH_INVALIDATE_LOGIN_FORM,
  AUTH_RESET_LOGIN_FORM_FIELDS,
  FETCH_WEATHER_PROGRESS,
  FETCH_WEATHER_COMPLETE,
  FETCH_WEATHER
} from "../constants";
import { message } from "antd";
import {
	hashHistory
} from 'react-router';

export function fetchWeather(data) {
  return {
    type: FETCH_WEATHER,
    payload: data
  };
}

export function fetchWeatherinprogress() {
  return {
    type: FETCH_WEATHER_PROGRESS
  };
}
export function fetchWeathercomplete() {
  return {
    type: FETCH_WEATHER_COMPLETE
  };
}
export function reduxResetState() {
  return { type: REDUX_RESET_STATE };
}

export function authUpdateLoginFormField(data) {
  return { type: AUTH_UPDATE_LOGIN_FORM_FIELD, payload: data };
}
export function authSubmitLoginForm(status) {
  return { type: AUTH_SUBMIT_LOGIN_FORM, payload: status };
}
export function authInvalidateLoginForm(data) {
  return { type: AUTH_INVALIDATE_LOGIN_FORM, payload: data };
}

export function authResetLoginFormFields() {
  return { type: AUTH_RESET_LOGIN_FORM_FIELDS };
}

export function authServerLoginUser(data) {
  return dispatch => {
    let nofity_message = message.info("Logging you in.. please wait", 0);
        nofity_message();
        dispatch(authSubmitLoginForm(false));
        hashHistory.push('/weather');
  };
}

