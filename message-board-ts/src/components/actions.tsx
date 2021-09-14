import React, { FunctionComponent, useContext } from 'react'; // importing FunctionComponent
import { ErrorLoggerContext } from '../context/error-logger-context';

const Actions: FunctionComponent<{}> = () => {

  const { stopMessage, clearMessage, isRunning, startMessage } = useContext(ErrorLoggerContext);

  return (
    <div className="action-container">
      {isRunning ? <button data-testid="stop" className="action-button" onClick={() => stopMessage()}>Stop</button> :
        <button data-testid="start" className="action-button" onClick={() => startMessage()}>Start</button>}
      <button data-testid="clear" className="action-button" onClick={() => clearMessage()}>Clear</button>
    </div>
  )
}

export default Actions;