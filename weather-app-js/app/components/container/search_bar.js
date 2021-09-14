import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../redux/actions'
import {message} from 'antd';

import * as API from '../../api'
import axios from 'axios';

const API_KEY = '6a78596d062df78380eff5944c4e5567';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchWeather: status => dispatch(Action.fetchWeather(status)),
    fetchWeatherinprogress: () => dispatch(Action.fetchWeatherinprogress()),
    fetchWeathercomplete: () => dispatch(Action.fetchWeathercomplete())

  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  componentWillMount(){
    this.props.fetchWeatherinprogress();

     // get api data here 
     axios
		.get(`${API.url('get_weather_data')}${API_KEY}&q=delhi`)
		.then((response) => {
			if (response.status === 200 ) {
        this.props.fetchWeather(response.data);
        this.props.fetchWeathercomplete();
				message.success('Successfully fetched data.', 3);
			}
		})
		.catch((response) => {
      this.props.fetchWeathercomplete();
			console.log('no data found', response);
		});
  }

  onFormSubmit(event) {
    event.preventDefault();
    if(this.state.term){
      this.props.fetchWeatherinprogress();
    } else {
      return ;
    }
     // get api data here 
     axios
		.get(`${API.url('get_weather_data')}${API_KEY}&q=${this.state.term}`)
		.then((response) => {
			if (response.status === 200 ) {
        this.props.fetchWeather(response.data);
        this.props.fetchWeathercomplete();
				message.success('Successfully fetched data.', 3);
			}
		})
		.catch((response) => {
      this.props.fetchWeathercomplete();
      message.success('No data found', 3);
			console.log('catch error', response);
		});
    // We need to go and fetch weather data
    this.setState({ term: '' });
  }

  render() {
    return (

      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}


export default connect(null, mapDispatchToProps)(SearchBar);
