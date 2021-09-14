import React from "react";
import Button from '@material-ui/core/Button';
import { CartItemTypes } from "../../App";
import { Wrapper} from './items.styles';

type Props = {
  items: CartItemTypes;
  handleAddToCart: (clickedItem: CartItemTypes) => void;
};
const Items: React.FC<Props> = ({ items, handleAddToCart }) => {
  return <Wrapper>
    <img src={items.image} alt={items.title}/>
    <div>
      <h3>{items.title}</h3>
      <p>{items.description}</p>
      <h3>${items.price}</h3>

    </div>
    <Button onClick={()=> handleAddToCart(items)}>Add to Cart </Button>
  </Wrapper>;
};

export default Items;
