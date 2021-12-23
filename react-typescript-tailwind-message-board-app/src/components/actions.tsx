import React, { FunctionComponent, useContext } from "react";
import { ErrorLoggerContext } from '../context/logger-context';


const ActionsComp: FunctionComponent<{}> = () => {

  const { startMessage, stopMessage, isRunning, clearMessage } = useContext(ErrorLoggerContext)
  return (
    <div className="container mx-auto flex justify-center">
      {isRunning ? (
        <button onClick={() => stopMessage()} className="bg-blue-800 rounded-md text-gray-200 w-24 m-2">Stop</button>
      ) : (
        <button onClick={() => startMessage()} className="bg-blue-800 rounded-md text-gray-200 w-24 m-2">Start</button>
      )}
      <button onClick={() => clearMessage()} className="bg-blue-800 rounded-md text-gray-200 w-24 m-2">Clear</button>
    </div>

  )
}

export default ActionsComp;