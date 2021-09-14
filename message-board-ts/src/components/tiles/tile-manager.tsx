import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { ErrorLoggerContext } from '../../context/error-logger-context';
import generateMessage, { Message, Priority } from '../../api/Api'
import TileList from './tile-list';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TileManager: React.FC<{}> = () => {
  const { messages, addMessage, removeMessage, isRunning } = useContext(ErrorLoggerContext);
  const notify = (message: string) => toast(message);
  /*
  * 0 = error
  * 1 = warning
  * 2 = info
  */
  useEffect(() => {
    // unsubscribe will happen on return cleanup
    const cleanUp = generateMessage((message: Message) => {
      // will keep adding messages
      if (isRunning) {
        addMessage(message);
        notify(message.message);
      } else {
        // DO NOTHING
      }
    });
    return cleanUp;
  }, [isRunning]);

  const warningMessages = messages.filter((message: Message) => message.priority === Priority.Warn)
  const errorMessages = messages.filter((message: Message) => message.priority === Priority.Error)
  const infoMessages = messages.filter((message: Message) => message.priority === Priority.Info)
  return (
    <div className="container tiles-container">
      <ToastContainer
        autoClose={2000}/>
      <TileList messages={errorMessages} type={Priority.Error} removeMessage={removeMessage} />
      <TileList messages={warningMessages} type={Priority.Warn} removeMessage={removeMessage} />
      <TileList messages={infoMessages} type={Priority.Info} removeMessage={removeMessage} />
    </div>
  );
}

export default TileManager;
