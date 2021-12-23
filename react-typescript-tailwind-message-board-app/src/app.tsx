import React, { useState } from 'react';
import LandingPage from './components/landing-page';
import { ErrorLoggerContext, Message } from './context/logger-context';

const App = () => {
  const [messages, setMessages] = useState<Message []>([]);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const addMessage = (message: Message) => {
    setMessages((oldMessages: Message []) => {
       const copy = [...oldMessages];
       copy.unshift(message);
       return copy;
    })
  }
  const stopMessage = () => {
    setIsRunning(false);
  }
   const startMessage = () => {
    setIsRunning(true);
  }
  const clearMessage = () => {
    setMessages([])
  }
   const removeMessage = (msg: Message) => {
    setMessages((oldMessages: Message []) => {
      const currentCopy = [...oldMessages];
      const finalMessages = currentCopy.filter((item : Message) => {
        return !(item.priority === msg.priority && item.message === msg.message)
      })
      return finalMessages;
   })
  }
  return (
    <ErrorLoggerContext.Provider value={{
      messages,
      isRunning,
      addMessage,
      removeMessage,
      stopMessage,
      startMessage,
      clearMessage
    }}>
      <LandingPage />
    </ErrorLoggerContext.Provider>
  )
}

export default App;