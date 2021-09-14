import React from 'react';
import { Button } from 'antd';
import ContainerContext from '../context/containerContext';

class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.updatePurchase = this.updatePurchase.bind(this);
    this.calculatePoints = this.calculatePoints.bind(this);
  }
  updatePurchase() {
    this.context.updatePurchase();
  }
  calculatePoints() {
    this.context.calculatePoints();
  }
  render() {
    return (
      <div className="search-container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12 box-container">
            <Button onClick={this.updatePurchase} type="primary" icon="search">
              <span>Populate Data</span>
            </Button>
            <Button onClick={this.calculatePoints} type="primary">
              <span>Calculate Points </span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

SearchBarComponent.contextType = ContainerContext;
export default SearchBarComponent;
