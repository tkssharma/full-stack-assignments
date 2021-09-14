import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';

import {Spin} from 'antd';

const mapStateToProps = (state, ownProps) => {
  return {
    loaded: state.weather.get('loaded'),
    data: state.weather.get('data'),

  }
}

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData)
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>lon={lon} lat={lat}</td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    console.log(this.props.data && this.props.data.length)
    return (
      <Spin spinning={! this.props.loaded} size="large">

      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {(this.props.data) ? (this.renderWeather(this.props.data)) : <tr></tr> }
        </tbody>
      </table>
      </Spin>
    );
  }
}


export default connect(mapStateToProps)(WeatherList);
