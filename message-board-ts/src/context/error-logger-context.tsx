import { createContext } from 'react';
import { Message } from '../api/Api';

export enum Theme {
  Error,
  Warn,
  Info,
}

export type ErrorLoggerContextState = {
  messages: Message [];
  isRunning: boolean;
  addMessage: (message: Message) => void;
  removeMessage: (message: Message) => void;
  clearMessage: () => void;
  stopMessage: () => void;
  startMessage:  () => void;
};
const contextDefaultValues: ErrorLoggerContextState = {
  messages: [],
  isRunning: false,
  addMessage: () => {},
  removeMessage: () => {},
  stopMessage: () => {},
  clearMessage: () => {},
  startMessage:() => {}
};

export const ErrorLoggerContext = createContext<ErrorLoggerContextState>(
  contextDefaultValues
);