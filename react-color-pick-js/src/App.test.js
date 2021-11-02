import React from 'react';
import App from './App';
import { fireEvent } from '@testing-library/dom';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

afterEach(() => {
  cleanup()
});

test('initial UI is rendered as expected', () => {
  const renderApp = () => render(<App colorPickerOptions={['yellow', 'green', 'red', 'blue', 'white']} initialSelectedColor={'black'}/>);
  let { getByTestId, queryByTestId } = renderApp();
  expect(getByTestId('app-title')).toHaveTextContent("Color Picker");
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('black');
  expect(getByTestId('colorPickerOptions').childElementCount).toBe(5);
  expect(getByTestId('colorPickerOptions').childNodes[0].style.backgroundColor).toBe('yellow');
  expect(getByTestId('colorPickerOptions').childNodes[1].style.backgroundColor).toBe('green');
  expect(getByTestId('colorPickerOptions').childNodes[2].style.backgroundColor).toBe('red');
  expect(getByTestId('colorPickerOptions').childNodes[3].style.backgroundColor).toBe('blue');
  expect(getByTestId('colorPickerOptions').childNodes[4].style.backgroundColor).toBe('white');
  expect(queryByTestId('colorPickerOptions').childNodes[5]).toBe(undefined);
});

test('click on color 1 changes the canvas color', () => {
  const renderApp = () => render(<App colorPickerOptions={['olive', 'purple', 'orange', 'black', 'yellow', 'lime']} initialSelectedColor={'red'}/>);
  let { getByTestId } = renderApp();
  expect(getByTestId('app-title')).toHaveTextContent("Color Picker");
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('red');
  expect(getByTestId('colorPickerOptions').childElementCount).toBe(6);
  expect(getByTestId('colorPickerOptions').childNodes[0].style.backgroundColor).toBe('olive');
  expect(getByTestId('colorPickerOptions').childNodes[1].style.backgroundColor).toBe('purple');
  expect(getByTestId('colorPickerOptions').childNodes[2].style.backgroundColor).toBe('orange');
  expect(getByTestId('colorPickerOptions').childNodes[3].style.backgroundColor).toBe('black');
  expect(getByTestId('colorPickerOptions').childNodes[4].style.backgroundColor).toBe('yellow');
  expect(getByTestId('colorPickerOptions').childNodes[5].style.backgroundColor).toBe('lime');
  fireEvent.click(getByTestId('colorPickerOptions').childNodes[0]);
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('olive');
});

test('click on color 2 changes the canvas color', () => {
  const renderApp = () => render(<App colorPickerOptions={['olive', 'purple', 'orange', 'black', 'yellow', 'lime']} initialSelectedColor={'red'}/>);
  let { getByTestId } = renderApp();
  expect(getByTestId('app-title')).toHaveTextContent("Color Picker");
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('red');
  expect(getByTestId('colorPickerOptions').childElementCount).toBe(6);
  expect(getByTestId('colorPickerOptions').childNodes[0].style.backgroundColor).toBe('olive');
  expect(getByTestId('colorPickerOptions').childNodes[1].style.backgroundColor).toBe('purple');
  expect(getByTestId('colorPickerOptions').childNodes[2].style.backgroundColor).toBe('orange');
  expect(getByTestId('colorPickerOptions').childNodes[3].style.backgroundColor).toBe('black');
  expect(getByTestId('colorPickerOptions').childNodes[4].style.backgroundColor).toBe('yellow');
  expect(getByTestId('colorPickerOptions').childNodes[5].style.backgroundColor).toBe('lime');
  fireEvent.click(getByTestId('colorPickerOptions').childNodes[1]);
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('purple');
});

test('click on color 3 changes the canvas color', () => {
  const renderApp = () => render(<App colorPickerOptions={['olive', 'purple', 'orange', 'black', 'yellow', 'lime']} initialSelectedColor={'red'}/>);
  let { getByTestId } = renderApp();
  expect(getByTestId('app-title')).toHaveTextContent("Color Picker");
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('red');
  expect(getByTestId('colorPickerOptions').childElementCount).toBe(6);
  expect(getByTestId('colorPickerOptions').childNodes[0].style.backgroundColor).toBe('olive');
  expect(getByTestId('colorPickerOptions').childNodes[1].style.backgroundColor).toBe('purple');
  expect(getByTestId('colorPickerOptions').childNodes[2].style.backgroundColor).toBe('orange');
  expect(getByTestId('colorPickerOptions').childNodes[3].style.backgroundColor).toBe('black');
  expect(getByTestId('colorPickerOptions').childNodes[4].style.backgroundColor).toBe('yellow');
  expect(getByTestId('colorPickerOptions').childNodes[5].style.backgroundColor).toBe('lime');
  fireEvent.click(getByTestId('colorPickerOptions').childNodes[2]);
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('orange');
});

test('click on color 4 changes the canvas color', () => {
  const renderApp = () => render(<App colorPickerOptions={['olive', 'purple', 'orange', 'black', 'yellow', 'lime']} initialSelectedColor={'red'}/>);
  let { getByTestId } = renderApp();
  expect(getByTestId('app-title')).toHaveTextContent("Color Picker");
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('red');
  expect(getByTestId('colorPickerOptions').childElementCount).toBe(6);
  expect(getByTestId('colorPickerOptions').childNodes[0].style.backgroundColor).toBe('olive');
  expect(getByTestId('colorPickerOptions').childNodes[1].style.backgroundColor).toBe('purple');
  expect(getByTestId('colorPickerOptions').childNodes[2].style.backgroundColor).toBe('orange');
  expect(getByTestId('colorPickerOptions').childNodes[3].style.backgroundColor).toBe('black');
  expect(getByTestId('colorPickerOptions').childNodes[4].style.backgroundColor).toBe('yellow');
  expect(getByTestId('colorPickerOptions').childNodes[5].style.backgroundColor).toBe('lime');
  fireEvent.click(getByTestId('colorPickerOptions').childNodes[3]);
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('black');
});

test('click on color 5 changes the canvas color', () => {
  const renderApp = () => render(<App colorPickerOptions={['olive', 'purple', 'orange', 'black', 'yellow', 'lime']} initialSelectedColor={'red'}/>);
  let { getByTestId } = renderApp();
  expect(getByTestId('app-title')).toHaveTextContent("Color Picker");
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('red');
  expect(getByTestId('colorPickerOptions').childElementCount).toBe(6);
  expect(getByTestId('colorPickerOptions').childNodes[0].style.backgroundColor).toBe('olive');
  expect(getByTestId('colorPickerOptions').childNodes[1].style.backgroundColor).toBe('purple');
  expect(getByTestId('colorPickerOptions').childNodes[2].style.backgroundColor).toBe('orange');
  expect(getByTestId('colorPickerOptions').childNodes[3].style.backgroundColor).toBe('black');
  expect(getByTestId('colorPickerOptions').childNodes[4].style.backgroundColor).toBe('yellow');
  expect(getByTestId('colorPickerOptions').childNodes[5].style.backgroundColor).toBe('lime');
  fireEvent.click(getByTestId('colorPickerOptions').childNodes[4]);
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('yellow');
});

test('click on color 6 changes the canvas color', () => {
  const renderApp = () => render(<App colorPickerOptions={['olive', 'purple', 'orange', 'black', 'yellow', 'lime']} initialSelectedColor={'red'}/>);
  let { getByTestId } = renderApp();
  expect(getByTestId('app-title')).toHaveTextContent("Color Picker");
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('red');
  expect(getByTestId('colorPickerOptions').childElementCount).toBe(6);
  expect(getByTestId('colorPickerOptions').childNodes[0].style.backgroundColor).toBe('olive');
  expect(getByTestId('colorPickerOptions').childNodes[1].style.backgroundColor).toBe('purple');
  expect(getByTestId('colorPickerOptions').childNodes[2].style.backgroundColor).toBe('orange');
  expect(getByTestId('colorPickerOptions').childNodes[3].style.backgroundColor).toBe('black');
  expect(getByTestId('colorPickerOptions').childNodes[4].style.backgroundColor).toBe('yellow');
  expect(getByTestId('colorPickerOptions').childNodes[5].style.backgroundColor).toBe('lime');
  fireEvent.click(getByTestId('colorPickerOptions').childNodes[5]);
  expect(getByTestId('selectedColor').style.backgroundColor).toBe('lime');
});
