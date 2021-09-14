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

test("Testing start/stop and clear actions", () => {
  renderComponents(mockContext)

  const stopBtn = screen.getByTestId("stop");
  fireEvent.click(stopBtn);
  
  expect(mockContext.stopMessage).toHaveBeenCalled();

});

test("Testing start stop and clear actions", () => {
  renderComponents(mockContext)

  const clearBtn = screen.getByTestId("clear");
  fireEvent.click(clearBtn);
  
  expect(mockContext.clearMessage).toHaveBeenCalled();

});

