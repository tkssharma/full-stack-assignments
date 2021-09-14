import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ErrorLoggerContext, ErrorLoggerContextState } from '../context/error-logger-context';
import LandingPage from '../components/landing-page';

const mockContext: ErrorLoggerContextState = {
  isRunning: true,
  messages: [],
  addMessage: jest.fn(),
  removeMessage: jest.fn(),
  clearMessage: jest.fn(),
  stopMessage: jest.fn(),
   startMessage: jest.fn(),
};
function renderComponents(mock: ErrorLoggerContextState) {
  return render(
      <ErrorLoggerContext.Provider value={mock}>
        <LandingPage />
      </ErrorLoggerContext.Provider>
    );
}

test("Testing tiles being shown for different types : error", () => {
  mockContext.messages = [{message: "hello world", priority: 0}]
  renderComponents(mockContext)

  const removeBtn = screen.getByTestId("remove");
  fireEvent.click(removeBtn);
  
  expect(mockContext.removeMessage).toHaveBeenCalled();
  expect(mockContext.removeMessage).toHaveBeenCalledWith({message: "hello world", priority: 0});

});

test("Testing tiles being shown for different types : warning", () => {
  mockContext.messages = [{message: "hello world", priority: 1}]
  renderComponents(mockContext)

  const removeBtn = screen.getByTestId("remove");
  fireEvent.click(removeBtn);
  
  expect(mockContext.removeMessage).toHaveBeenCalled();
  expect(mockContext.removeMessage).toHaveBeenCalledWith({message: "hello world", priority: 1});

});