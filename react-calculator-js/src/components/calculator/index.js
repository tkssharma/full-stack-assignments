import React, { useState } from "react";
import "./index.css";

export default function Calculator() {
  const [input1, setInput1] = useState("");
  const [count, setCount] = useState(0);
  const [result, setResult] = useState('reset');
  const [input2, setInput2] = useState("");
  const [operation, setOperation] = useState("+");

  const action = (operation) => {
    if (input1 && input2) {
      setCount(count => count +1);
      const num1 = parseInt(input1);
      const num2 = parseInt(input2);
      setOperation(operation);
      switch (operation) {
        case "+":
          setResult(num1 + num2);
          break;
        case "-":
          setResult(num1 - num2);
          break;
        case "*":
          setResult(num1 * num2);
          break;
        case "/":
          setResult(num1 / num2);
          break;
      }
    }
  };
  const reset = () => {
    setOperation("+");
    setInput1('');
    setInput2('');
    setResult('reset');
  };

  return (
    <div className="layout-column align-items-center">
      <div
        data-testid="total-operations"
        className="pt-50 total-operations"
  >Total operations performed: {count}</div>
      <div className="card">
        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input
              value={input1}
              type="number"
              onChange={(e) => setInput1(e.target.value)}
              className="ml-3 mr-3"
              data-testid="app-input1"
              autoComplete="off"
              placeholder="Eg: 1"
              name="input1"
            />
            <label
              className="ml-2 mr-2 symbol text-center"
              data-testid="selected-operator"
            >
              {operation}
            </label>
            <input
             onChange={(e) => setInput2(e.target.value)}
              value={input2}
              type="number"
              data-testid="app-input2"
              autoComplete="off"
              className="ml-3 mr-3"
              placeholder="Eg: 2"
            />
          </div>

          <div className="layout-row justify-content-around mt-30">
            <button
              className="operationFont"
              type="submit"
              onClick={() => action('+')}
              data-testid="addButton"
            >
              +
            </button>
            <button
              className="operationFont"
              type="submit"
              onClick={() => action('-')}
              data-testid="subtractButton"
            >
              -
            </button>
            <button
              className="operationFont"
              type="submit"
              onClick={() => action('*')}
              data-testid="multiplyButton"
            >
              *
            </button>
            <button
              className="operationFont"
              type="submit"
              onClick={() => action('/')}
              data-testid="divideButton"
            >
              /
            </button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button
              onClick={reset}
              type="reset"
              data-testid="resetButton"
              className="outline danger"
            >
              Reset
            </button>
            <div className="layout-row justify-content-center align-items-center result-container">
              {result !== 'reset' && <div
                data-testid="result"
                className="result-value ma-0 slide-up-fade-in"
              >Result: {result}</div>}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
