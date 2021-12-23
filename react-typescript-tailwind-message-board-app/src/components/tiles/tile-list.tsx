import React, { FunctionComponent, useContext, useEffect } from "react";
import { ErrorLoggerContext, Message } from "../../context/logger-context";
import generateMessage, { Priority } from '../../api';
import Tile from './tile-list-item';

type TileListProps ={
  messages: Message [],
  type: number,
  removeMessage: (message: Message) => void;
}
const TileList: FunctionComponent<TileListProps> = ({
 messages,
 removeMessage,
 type
}: TileListProps) => {
  /*
   * error: #F56236
  * warning: #FCE788
  * info: #88FCA3
  * */
  const getClassType = (index: number) => {
     if(Priority.Error === index) {
       return 'bg-error p-2 m-1'
     }  else if (Priority.Warn === index) {
      return 'bg-warn p-2 m-1'
    } else if (Priority.Info === index) {
      return 'bg-info p-2 m-1'
    }
  }
  const getLabel = (index: number) => {
    if (Priority.Error === index) {
      return 'Error'
    } else if (Priority.Warn === index) {
      return 'Warning'
    } else if (Priority.Info === index) {
      return 'Info'
    }
 }

  return (
    <div className="p-2 mx-2">
        <h2>{getLabel(type)} {type}</h2>
        <h3>Messages {messages.length}</h3>
        {
          messages.map((i: Message, index: number) => {
            return (
              <div className={getClassType(type)}  key={index}>
                <Tile message={i} removeMessage={removeMessage} />
              </div>
            )
          })
        }
    </div>
  )
}

export default TileList;