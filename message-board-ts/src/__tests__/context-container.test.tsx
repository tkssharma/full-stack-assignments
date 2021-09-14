import React from 'react';
import { render, screen } from '@testing-library/react';
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
test("Testing ErrorLoggerContext with mock provider Data", () => {
  render(
    <ErrorLoggerContext.Provider value={mockContext}>
      <LandingPage />
    </ErrorLoggerContext.Provider>
  );
  expect(screen.getByText("Error Type 0")).toBeInTheDocument();
  expect(screen.getByText("Warning Type 1")).toBeInTheDocument();
  expect(screen.getByText("Info Type 2")).toBeInTheDocument();
});

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


test("Testing ErrorLoggerContext with mock provider Data with error messages", () => {
  mockContext.messages = [
    {
      "message": 'Hello World error',
      "priority": 0
    },
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
  expect(screen.getByText("Hello World error")).toBeInTheDocument();
  expect(screen.getByText("Hello World warning")).toBeInTheDocument();

});

test("Testing ErrorLoggerContext with mock provider Data with all types", () => {
  mockContext.messages = [
    {
      "message": 'Hello World error',
      "priority": 0
    },
    {
      "message": 'Hello World warning',
      "priority": 1
    },
    {
      "message": 'Hello World info',
      "priority": 2
    }
  ]
  render(
    <ErrorLoggerContext.Provider value={mockContext}>
      <LandingPage />
    </ErrorLoggerContext.Provider>
  );
  expect(screen.getByText("Hello World error")).toBeInTheDocument();
  expect(screen.getByText("Hello World warning")).toBeInTheDocument();
  expect(screen.getByText("Hello World info")).toBeInTheDocument();

  expect(screen.getByTestId("Error").textContent).toBe("Error Type 0");
  expect(screen.getByTestId("Warning").textContent).toBe("Warning Type 1");
  expect(screen.getByTestId("Info").textContent).toBe("Info Type 2");

});
