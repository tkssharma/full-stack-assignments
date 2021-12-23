import React, { FunctionComponent, useContext, useEffect } from "react";
import { ErrorLoggerContext, Message } from "../../context/logger-context";

type TileListProps = {
  message: Message,
  removeMessage: (message: Message) => void;
}
const TileListItem: FunctionComponent<TileListProps> = ({
  message,
  removeMessage }: TileListProps) => {


  return (
    <>
      <span>{message.message}</span>
      <div className="rounded-md mt-2 mb-1 text-center bg-blue-400 px-4 w-full" data-testid="remove" onClick={() => removeMessage(message)}>Remove</div>
    </>
  )
}

export default TileListItem;