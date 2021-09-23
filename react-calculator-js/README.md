# React: Calculator

## Environment 

- React Version: 16.13.1
- Node Version: 12(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/DyjKYetGu_F8Hiko6qd3fw/calculator.gif)

## Functionality Requirements

- There are 2 input boxes for entering values.

- There are 4 buttons that perform mathematical operations to calculate the result:

  - `+` performs addition

  - `-` performs subtraction

  - `*` performs multiplication

  - `/` performs division

- Whenever you click any of these 4 buttons, an operation is performed and result is calculated. This result is rendered in the following div - `<div data-testid="result">Result: {result}</div>`. Here {result} is the result calculated. This div should be rendered only when we have calculated some result. Initially, since no operation is performed, this div should not be rendered.

- The label between the inputs displays the current operation. The initial operation to show in the label is '+'.

- Maintain the total count of operations performed. The count is rendered in the following div - `<div data-testid="total-operations">Total operations performed: {count}</div>`. Here {count} is the total number of operations performed. Initially, this value should be 0.

- There is a 'Reset' button, which, when clicked, clears the input boxes, sets the selected operator back to its default value '+', and clears the result value (thus not rendering the result div). It does not reset the total operations count.

 

## Testing Requirements

The following data-testid attributes are required in the component for the tests to pass:

- Total Operations div should have data-testid attribute 'total-operations'.

- Input for first number should have data-testid attribute 'app-input1'.

- Input for second number should have data-testid attribute 'app-input2'.

- Label to show selected operator should have data-testid attribute 'selected-operator'.

- Add button should have data-testid attribute 'addButton'.

- Subtract button should have data-testid attribute 'subtractButton'.

- Multiply button should have data-testid attribute 'multiplyButton'.

- Divide button should have data-testid attribute 'divideButton'.

- Result div should have data-testid attribute 'result'.

- Reset button should have data-testid attribute 'resetButton'.

Please note that component has above data-testids for test cases and certain classes and ids for rendering purposes. It is advised not to change them.


## Project Specifications

**Read Only Files**
- src/App.test.js

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
