/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import ConatinerContext from '../context/containerContext';
import 'react-toastify/dist/ReactToastify.css';
import { message } from 'antd';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchase: [],
      loading: false,
      totalPoints: 0,
      dates: [],
    };
  }
  getDaysArray(start, end) {
    for (var arr = [], dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }
    return arr;
  }
  componentDidMount() {
    const last3MonthDates = this.getDaysArray(
      new Date('2019-05-01'),
      new Date('2019-08-01'),
    );
    this.setState({
      dates: last3MonthDates,
    });
  }
  updatePurchase() {
    // u can write axios call also here
    const httpRequest = new XMLHttpRequest();
    httpRequest.open(
      'GET',
      'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json',
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        const obj = JSON.parse(httpRequest.responseText);
        const mockData = obj.map((i, index) => {
          // getting some mock data from dummy api call
          // using XHR call
          i.purchase = Math.floor(Math.random() * 90 + 10) + 20;
          i.shopping = 'Market shopping';
          i.year = 2019;
          i.date = this.state.dates[index];
          i.shopping = index % 2 === 0 ? 'Fashion Clothing' : 'Household Items';
          return i;
        });
        this.setState({
          // mock data for 90 days
          purchase: mockData.slice(0, 90),
          loading: false,
        });
      }
    };
  }
  calculatePoints() {
    // do the calculation here
    let sum = 0;
    this.state.purchase.map(i => {
      if (i.purchase > 100) {
        sum = sum + 2 * i.purchase - 100;
      }
      if (i.purchase > 50) {
        sum = sum + 1 * i.purchase - 50;
      }
    });
    message.success('Assigning Random Points');
    message.success(`Total Points Collected is ${sum}`);
  }
  resetPoints() {
    this.setState({
      purchase: [],
      loading: false,
      totalPoints: 0,
    });
  }
  setLoading() {
    this.setState({
      loading: true,
    });
  }
  render() {
    return (
      <ConatinerContext.Provider
        value={{
          state: this.state,
          resetPoints: this.resetPoints.bind(this),
          updatePurchase: this.updatePurchase.bind(this),
          setLoading: this.setLoading.bind(this),
          calculatePoints: this.calculatePoints.bind(this),
        }}
      >
        {this.props.children}
      </ConatinerContext.Provider>
    );
  }
}
export default Home;
