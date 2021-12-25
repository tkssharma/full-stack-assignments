import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './product-slice';
import cartReducer from './cart-slice'
import uiReducer from './ui-slice'

const Store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    ui: uiReducer,
  }
})

export default Store;