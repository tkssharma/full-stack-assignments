import React, { useState } from "react";
import "./styles.css";
import { useQuery } from "react-query";
// Material-ui Components
import Drawer from "@material-ui/core/Drawer";


import { LinearProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
// Styles
import { Wrapper, StyledButton } from "./App.styles";
import Items from "./components/Items/items";
import Cart from "./components/Cart/cart";

export type CartItemTypes = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const fetchProducts = async (): Promise<CartItemTypes[]> => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
};

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemTypes[]>([]);
  const { data, isLoading, error } = useQuery<CartItemTypes[]>(
    "products",
    fetchProducts
  );
  const getTotalItems = (items: CartItemTypes[]) => {
    return items.reduce((acc: number, item) => acc + item.amount, 0);
  };
  const removeFromCart = () => null;
  const handleAddToCart = (clickedItem: CartItemTypes) => null;
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Oops! Something went wrong!</div>;
  return (
    <Wrapper className="App">
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(!cartOpen)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={getTotalItems}
          removeFromCart={removeFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="primary">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Items items={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}
