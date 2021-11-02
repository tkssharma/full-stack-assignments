import React, { Component } from "react";
import "./index.css";
const classNames = require('classnames');

export default class ColorPicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedColor: this.props.initialSelectedColor
    }
  }
  select = (color) => {
    alert("test")
    this.setState({ selectedColor: color });
  }
  render() {
    return (
      <div>
        <div className="layout-row justify-content-center">
          <div className="card mt-75">
            <div className="canvas" style={{ backgroundColor: this.state.selectedColor }} data-testid="selectedColor">
              <p className="text-center mx-auto px-5">{this.state.selectedColor}</p>
            </div>
            <div className="card-actions">
              <div className="layout-row justify-content-center align-items-center" data-testid="colorPickerOptions">
                {this.props.colorPickerOptions.map((color, index) => {
                  return (
                    <div
                      onClick={() => this.select(color)}
                      style={{ backgroundColor: color }}
                      className={
                        classNames({
                          'color-box': true,
                          'mx-8': true,
                          'my-15': true,
                          'selected': this.state.selectedColor === color
                        })
                      }
                      key={color}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
