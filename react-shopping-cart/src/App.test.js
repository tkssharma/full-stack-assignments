import React from 'react';
import App from './App';
import {render, fireEvent, cleanup, within} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';


const renderApp = () => render(<App/>);

afterEach(() => {
    cleanup()
});

const IDMAPS = {
    ADD_BTN: 'btn-quantity-add',
    SUBTRACT_BTN: 'btn-quantity-subtract',
    ADD_TO_CART_BTN: 'btn-item-add',
    QUANTITY_INPUT: 'cart-quantity',
    CART_ITEM_QUANTITY : 'cart-item-quantity',
    CART_ITEM_NAME : 'cart-item-name',
    PRODUCT_ITEMS: ['product-item-0', 'product-item-1', 'product-item-2', 'product-item-3', 'product-item-4', 'product-item-5']
}

test('Add item to cart', async () => {
    let addToCartButton, cartQuantity, item;
    const {
         queryByTestId
    } = renderApp();
    expect(queryByTestId('cart-item-0')).toBeNull();
    item = queryByTestId(IDMAPS.PRODUCT_ITEMS[1]);
    let utils = within(item);

    addToCartButton = utils.getByTestId(IDMAPS.ADD_TO_CART_BTN);
    cartQuantity = utils.queryByTestId(IDMAPS.QUANTITY_INPUT);

    expect(cartQuantity).toBeFalsy();
    expect(addToCartButton).toBeTruthy();

    fireEvent.click(addToCartButton);

    addToCartButton = utils.queryByTestId(IDMAPS.ADD_TO_CART_BTN);
    cartQuantity = utils.getByTestId(IDMAPS.QUANTITY_INPUT);
    expect(cartQuantity).toBeTruthy();
    expect(cartQuantity.value).toEqual('1');
    expect(addToCartButton).toBeFalsy();

    const cartItem = queryByTestId('cart-item-0');
    expect(cartItem).toBeTruthy();

    utils = within(cartItem);
    expect(utils.getByTestId(IDMAPS.CART_ITEM_QUANTITY).innerHTML).toEqual('1');
    expect(utils.getByTestId(IDMAPS.CART_ITEM_NAME).innerHTML).toEqual('HandBag');
});

test('Update quantity in cart', () => {
    let addToCartButton, cartQuantity, item, addBtn, subtractBtn, cartItem;
    const {
        queryByTestId
    } = renderApp();
    item = queryByTestId(IDMAPS.PRODUCT_ITEMS[0]);
    let utils = within(item);
    addToCartButton = utils.getByTestId(IDMAPS.ADD_TO_CART_BTN);

    fireEvent.click(addToCartButton);

    cartQuantity = utils.getByTestId(IDMAPS.QUANTITY_INPUT);
    expect(cartQuantity).toBeTruthy();
    expect(cartQuantity.value).toEqual('1');

    addBtn = utils.getByTestId(IDMAPS.ADD_BTN);
    subtractBtn = utils.getByTestId(IDMAPS.SUBTRACT_BTN);

    expect(addBtn).toBeTruthy();
    expect(subtractBtn).toBeTruthy();

    fireEvent.click(addBtn);

    cartQuantity = utils.getByTestId(IDMAPS.QUANTITY_INPUT);
    expect(cartQuantity.value).toEqual('2');

    fireEvent.click(addBtn);
    cartQuantity = utils.getByTestId(IDMAPS.QUANTITY_INPUT);
    expect(cartQuantity.value).toEqual('3');

    cartItem = queryByTestId('cart-item-0');
    expect(cartItem).toBeTruthy();

    utils = within(cartItem);
    expect(utils.getByTestId(IDMAPS.CART_ITEM_QUANTITY).innerHTML).toEqual('3');
    expect(utils.getByTestId(IDMAPS.CART_ITEM_NAME).innerHTML).toEqual('Cap');

    fireEvent.click(subtractBtn);

    utils = within(item);
    cartQuantity = utils.getByTestId(IDMAPS.QUANTITY_INPUT);
    expect(cartQuantity.value).toEqual('2');

    cartItem = queryByTestId('cart-item-0');
    expect(cartItem).toBeTruthy();

    utils = within(cartItem);
    expect(utils.getByTestId(IDMAPS.CART_ITEM_QUANTITY).innerHTML).toEqual('2');
    expect(utils.getByTestId(IDMAPS.CART_ITEM_NAME).innerHTML).toEqual('Cap');

})

test('Remove item from cart', () => {
    let addToCartButton, item, addBtn, subtractBtn, cartItem;
    const {
        queryByTestId
    } = renderApp();
    item = queryByTestId(IDMAPS.PRODUCT_ITEMS[2]);
    let utils = within(item);
    addToCartButton = utils.getByTestId(IDMAPS.ADD_TO_CART_BTN);

    fireEvent.click(addToCartButton);

    addBtn = utils.getByTestId(IDMAPS.ADD_BTN);
    subtractBtn = utils.getByTestId(IDMAPS.SUBTRACT_BTN);

    expect(addBtn).toBeTruthy();
    expect(subtractBtn).toBeTruthy();

    fireEvent.click(subtractBtn);

    addBtn = utils.queryByTestId(IDMAPS.ADD_BTN);
    subtractBtn = utils.queryByTestId(IDMAPS.SUBTRACT_BTN);
    expect(addBtn).toBeFalsy();
    expect(subtractBtn).toBeFalsy();
    addToCartButton = utils.getByTestId(IDMAPS.ADD_TO_CART_BTN);
    expect(addToCartButton).toBeTruthy();

    cartItem = queryByTestId('cart-item-0');
    expect(cartItem).toBeFalsy();

})

test('Performs Series of Actions', () => {
    let addToCartButton, item, addBtn, subtractBtn, cartItem1, cartItem2, cartQuantity, utils;
    const {
        queryByTestId
    } = renderApp();
    item = queryByTestId(IDMAPS.PRODUCT_ITEMS[2]);
    utils = within(item);
    addToCartButton = utils.getByTestId(IDMAPS.ADD_TO_CART_BTN);

    fireEvent.click(addToCartButton);

    addBtn = utils.queryByTestId(IDMAPS.ADD_BTN);
    subtractBtn = utils.queryByTestId(IDMAPS.SUBTRACT_BTN);
    addToCartButton = utils.queryByTestId(IDMAPS.ADD_TO_CART_BTN);
    cartQuantity = utils.getByTestId(IDMAPS.QUANTITY_INPUT);

    expect(addBtn).toBeTruthy();
    expect(subtractBtn).toBeTruthy();
    expect(cartQuantity).toBeTruthy();
    expect(addToCartButton).toBeFalsy();

    cartItem1 = queryByTestId('cart-item-0');
    expect(cartItem1).toBeTruthy();


    item = queryByTestId(IDMAPS.PRODUCT_ITEMS[3]);
    utils = within(item);
    addToCartButton = utils.getByTestId(IDMAPS.ADD_TO_CART_BTN);

    fireEvent.click(addToCartButton);

    addBtn = utils.queryByTestId(IDMAPS.ADD_BTN);
    subtractBtn = utils.queryByTestId(IDMAPS.SUBTRACT_BTN);
    addToCartButton = utils.queryByTestId(IDMAPS.ADD_TO_CART_BTN);
    cartQuantity = utils.getByTestId(IDMAPS.QUANTITY_INPUT);

    expect(addBtn).toBeTruthy();
    expect(subtractBtn).toBeTruthy();
    expect(cartQuantity).toBeTruthy();
    expect(addToCartButton).toBeFalsy();

    fireEvent.click(addBtn);

    cartItem1 = queryByTestId('cart-item-0');
    cartItem2 = queryByTestId('cart-item-1');
    expect(cartItem1).toBeTruthy();
    expect(cartItem2).toBeTruthy();

    expect(within(cartItem1).getByTestId(IDMAPS.CART_ITEM_QUANTITY).innerHTML).toEqual('1');
    expect(within(cartItem1).getByTestId(IDMAPS.CART_ITEM_NAME).innerHTML).toEqual('Shirt');

    expect(within(cartItem2).getByTestId(IDMAPS.CART_ITEM_QUANTITY).innerHTML).toEqual('2');
    expect(within(cartItem2).getByTestId(IDMAPS.CART_ITEM_NAME).innerHTML).toEqual('Shoe');

    fireEvent.click(subtractBtn);

    cartItem1 = queryByTestId('cart-item-0');
    cartItem2 = queryByTestId('cart-item-1');
    expect(cartItem1).toBeTruthy();
    expect(cartItem2).toBeTruthy();

    expect(within(cartItem1).getByTestId(IDMAPS.CART_ITEM_QUANTITY).innerHTML).toEqual('1');
    expect(within(cartItem1).getByTestId(IDMAPS.CART_ITEM_NAME).innerHTML).toEqual('Shirt');

    expect(within(cartItem2).getByTestId(IDMAPS.CART_ITEM_QUANTITY).innerHTML).toEqual('1');
    expect(within(cartItem2).getByTestId(IDMAPS.CART_ITEM_NAME).innerHTML).toEqual('Shoe');

    subtractBtn = within(queryByTestId(IDMAPS.PRODUCT_ITEMS[2])).getByTestId(IDMAPS.SUBTRACT_BTN);
    fireEvent.click(subtractBtn);

    cartItem1 = queryByTestId('cart-item-0');
    cartItem2 = queryByTestId('cart-item-1');
    expect(cartItem1).toBeTruthy();
    expect(cartItem2).toBeFalsy();

    item = queryByTestId(IDMAPS.PRODUCT_ITEMS[4]);
    utils = within(item);
    addToCartButton = utils.getByTestId(IDMAPS.ADD_TO_CART_BTN);

    fireEvent.click(addToCartButton);

    cartItem1 = queryByTestId('cart-item-0');
    cartItem2 = queryByTestId('cart-item-1');
    expect(cartItem1).toBeTruthy();
    expect(cartItem2).toBeTruthy();

    expect(within(cartItem1).getByTestId(IDMAPS.CART_ITEM_QUANTITY).innerHTML).toEqual('1');
    expect(within(cartItem1).getByTestId(IDMAPS.CART_ITEM_NAME).innerHTML).toEqual('Shoe');

    expect(within(cartItem2).getByTestId(IDMAPS.CART_ITEM_QUANTITY).innerHTML).toEqual('1');
    expect(within(cartItem2).getByTestId(IDMAPS.CART_ITEM_NAME).innerHTML).toEqual('Pant');

})
