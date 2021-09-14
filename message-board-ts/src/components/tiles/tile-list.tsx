import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { Message, Priority } from '../../api/Api';
import Tile from './tile-list-item';

type TileListProps = {
  messages: Message[],
  type: number;
  removeMessage: (message: Message) => void
}

export const TileList: FunctionComponent<TileListProps> = ({ messages, removeMessage, type }: TileListProps) => {

  /*
   * error: #F56236
  * warning: #FCE788
  * info: #88FCA3
  * */
  const getTileColor = (index: number) => {
    if (Priority.Error === index) {
      return '#F56236'
    } else if (Priority.Warn === index) {
      return '#FCE788'
    } else if (Priority.Info === index) {
      return '#88FCA3'
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
  const style = {
    backgroundColor: getTileColor(type)
  }
  const label = getLabel(type);
  return (
    <div className="tile-list">
      <h2 data-testid={label}>{label} Type {type}</h2>
      <h5>Count {messages.length || 0}</h5>
      {messages.map((i: Message, index: number) => {
        return (
          <div style={style} className="tile-card" key={index} >
            <Tile message={i} removeMessage={removeMessage} />
          </div>
        )
      })}
    </div>
  )
}

export default TileList;