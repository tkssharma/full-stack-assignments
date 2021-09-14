import * as React from 'react';
import { useState } from 'react';
import { Message } from './api/Api';
import { ErrorLoggerContext } from './context/error-logger-context';
import LandingPage from './components/landing-page';

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const addMessage = (message: Message) => {
    setMessages((oldMessages: Message[]) => {
      const messages = [...oldMessages];
      messages.unshift(message);
      return messages;
    });
  };
  const clearMessage = () => {
    setMessages([]);
  };
  const stopMessage = () => {
    setIsRunning(false);
  };
  const startMessage = () => {
    setIsRunning(true);
  };
  const removeMessage = (message: Message) => {
    const currentMessages = [...messages];
    const finalMessages = currentMessages.filter((item: Message) => {
      return !(item.priority === message.priority && item.message === message.message);
    });
    setMessages(finalMessages);
  };
  return (
    <ErrorLoggerContext.Provider
      value={{
        messages,
        isRunning,
        addMessage,
        removeMessage,
        stopMessage,
        clearMessage,
        startMessage,
      }}
    >
      <LandingPage />
    </ErrorLoggerContext.Provider>
  );
};

export default App;
