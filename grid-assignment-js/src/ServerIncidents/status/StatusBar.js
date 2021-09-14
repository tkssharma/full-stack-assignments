import React, { Component } from 'react';

export default class ClickableStatusBarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.onClick = this.onClick.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  onClick(e) {
    // todo
  }

  setVisible(visible) {
    this.setState({ visible });
  }

  isVisible() {
    return this.state.visible;
  }

  render() {
    if (this.state.visible) {
      return (
        <div>
          <div>
            <span className="component">
              Status Bar Component&nbsp;
              <input type="button" onClick={this.onClick} value="Click Me" />
            </span>
          </div>
        </div>
      );
    }

    return null;
  }
}
