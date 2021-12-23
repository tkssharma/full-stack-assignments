import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { ErrorLoggerContext, ErrorLoggerContextState } from '../context/logger-context';
import LandingPage from '../components/landing-page';
const mockContext: ErrorLoggerContextState = {
  isRunning: true,
  messages: [],
  addMessage: jest.fn(),
  removeMessage: jest.fn(),
  startMessage: jest.fn(),
  stopMessage: jest.fn(),
  clearMessage: jest.fn(),
}
function renderComponent(mock: ErrorLoggerContextState) {
  return render(
    <ErrorLoggerContext.Provider value={mock}>
      <LandingPage />
    </ErrorLoggerContext.Provider>
  )
}

test("testing start, stop and clear actions", () => {
  renderComponent(mockContext);
  const stopBtn = screen.getAllByTestId("start")
  fireEvent.click(stopBtn[0]);
  expect(mockContext.startMessage).toHaveBeenCalled()
})

test("testing start, stop and clear actions", () => {
  renderComponent(mockContext);
  const stopBtn = screen.getAllByTestId("stop")
  fireEvent.click(stopBtn[0]);
  expect(mockContext.stopMessage).toHaveBeenCalled()
})

test("testing start, stop and clear actions", () => {
  renderComponent(mockContext);
  const stopBtn = screen.getAllByTestId("clear")
  fireEvent.click(stopBtn[0]);
  expect(mockContext.clearMessage).toHaveBeenCalled()
})

test("Testing ErrorLoggerContext with mock provider Data with warning messages", () => {
  mockContext.messages = [
    {
      "message": 'Hello World warning',
      "priority": 1
    }
  ]
  render(
    <ErrorLoggerContext.Provider value={mockContext}>
      <LandingPage />
    </ErrorLoggerContext.Provider>
  );
  expect(screen.getByText("Hello World warning")).toBeInTheDocument();
});


test("Testing ErrorLoggerContext with mock provider Data with warning messages", () => {
  mockContext.messages = [
    {
      "message": 'Hello World warning',
      "priority": 1
    },
    {
      "message": 'Hello World error',
      "priority": 1
    }
  ]
  render(
    <ErrorLoggerContext.Provider value={mockContext}>
      <LandingPage />
    </ErrorLoggerContext.Provider>
  );
  expect(screen.getByText("Hello World warning")).toBeInTheDocument();
  expect(screen.getByText("Hello World error")).toBeInTheDocument();

});