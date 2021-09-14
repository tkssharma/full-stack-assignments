import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { Message, Priority } from '../../api/Api';

type TileProps = {
  message: Message,
  removeMessage: (message: Message) => void
}

export const Tile: FunctionComponent<TileProps> = ({ message, removeMessage }: TileProps) => {

  return (
    <>
       <span>{ message.message}</span>
       <div data-testid="remove" onClick={() => removeMessage(message)}>Remove</div>
    </>
  )
}

export default Tile;