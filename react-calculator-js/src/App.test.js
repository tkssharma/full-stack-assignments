import React from 'react';
import App from './App';
import { render, fireEvent, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

const renderApp = () => render(<App/>);

let title, totalOperations, input1, input2, selectedOperator, addButton, subtractButton, multiplyButton, divideButton, resetButton, isResultExist;
let getByTestIdFunction, queryByTestIdFunction;
afterEach(() => {
  cleanup()
});

beforeEach(() => {
	let { getByTestId, queryByTestId } = renderApp();
	totalOperations = getByTestId('total-operations');
	input1 = getByTestId('app-input1');
	input2 = getByTestId('app-input2');
	selectedOperator = getByTestId('selected-operator');
	addButton = getByTestId('addButton');
	subtractButton = getByTestId('subtractButton');
	multiplyButton = getByTestId('multiplyButton');
	divideButton = getByTestId('divideButton');
	resetButton = getByTestId('resetButton');
	isResultExist = queryByTestId('result');
	getByTestIdFunction = getByTestId;
	queryByTestIdFunction = queryByTestId;
});

test('initial UI is rendered as expected', () => {
	expect(totalOperations).toHaveTextContent('Total operations performed: 0');
	expect(input1.value).toBeFalsy();
	expect(input2.value).toBeFalsy();
	expect(selectedOperator).toHaveTextContent("+");
	expect(addButton).toHaveTextContent("+");
	expect(subtractButton).toHaveTextContent("-");
	expect(divideButton).toHaveTextContent("/");
	expect(addButton).toHaveTextContent("+");
	expect(isResultExist).toBe(null);
	expect(resetButton).toHaveTextContent("Reset");
});

test('+ operation works', () => {
	fireEvent.input(input1, {
		target: { value: '10'}
	});
	fireEvent.input(input2, {
		target: { value: '5'}
	});
	fireEvent.click(addButton);
	expect(queryByTestIdFunction('result')).not.toBe(null);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 15');
	expect(selectedOperator).toHaveTextContent("+");
});

test('- operation works', () => {
	fireEvent.input(input1, {
		target: { value: '10'}
	});
	fireEvent.input(input2, {
		target: { value: '5'}
	});
	fireEvent.click(subtractButton);
	expect(queryByTestIdFunction('result')).not.toBe(null);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 5');
	expect(selectedOperator).toHaveTextContent("-");
});

test('* operation works', () => {
	fireEvent.input(input1, {
		target: { value: '10'}
	});
	fireEvent.input(input2, {
		target: { value: '5'}
	});
	fireEvent.click(multiplyButton);
	expect(queryByTestIdFunction('result')).not.toBe(null);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 50');
	expect(selectedOperator).toHaveTextContent("*");
});

test('/ operation works', () => {
	fireEvent.input(input1, {
		target: { value: '10'}
	});
	fireEvent.input(input2, {
		target: { value: '5'}
	});
	fireEvent.click(divideButton);
	expect(queryByTestIdFunction('result')).not.toBe(null);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 2');
	expect(selectedOperator).toHaveTextContent("/");
});

test('total operations count is maintained', () => {
	fireEvent.input(input1, {
		target: { value: '10'}
	});
	fireEvent.input(input2, {
		target: { value: '5'}
	});
	fireEvent.click(addButton);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 15');
	fireEvent.click(subtractButton);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 5');
	fireEvent.click(multiplyButton);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 50');
	fireEvent.click(divideButton);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 2');
	fireEvent.input(input1, {
		target: { value: '1'}
	});
	fireEvent.input(input2, {
		target: { value: '1'}
	});
	fireEvent.click(addButton);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 2');
	fireEvent.click(subtractButton);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 0');
	fireEvent.click(multiplyButton);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 1');
	fireEvent.click(divideButton);
	expect(getByTestIdFunction('result')).toHaveTextContent('Result: 1');
	expect(totalOperations).toHaveTextContent('Total operations performed: 8');
});

test('Reset button works', () => {
	fireEvent.input(input1, {
		target: { value: '10'}
	});
	fireEvent.input(input2, {
		target: { value: '5'}
	});
	fireEvent.click(subtractButton);
	fireEvent.click(resetButton);
	expect(totalOperations).toHaveTextContent('Total operations performed: 1');
	expect(input1.value).toBeFalsy();
	expect(input2.value).toBeFalsy();
	expect(selectedOperator).toHaveTextContent("+");
	expect(queryByTestIdFunction('result')).toBe(null);
});