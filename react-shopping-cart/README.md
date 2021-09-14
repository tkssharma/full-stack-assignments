# React: HackerShop Shopping Cart

## Environment 

- React Version: 16.13.1
- Node Version: ^12.18.3
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/gMzCl_zemNrL_71YPagyqg/hackershop-shopping-cart.gif)

## Functionality Requirements

The app has two separate views/components. The Product Listing Component and Cart Component. The list of products to be displayed is already provided in the app. 

The app should implement the following functionalities:

- Clicking on each Add To Cart should add the item to the shopping cart. The listing in the Product Listing component should be updated to show the Increase/Decrease Quantity button and the quantity of the item in cart.
  
- Clicking on each Increase Quantity Button should increase the quantity of the item in cart. 
  
- Clicking on each Decrease Quantity button when:
  
  - Cart Quantity of item is 1:  Should remove the item from the cart, hide the Increase/Decrease Quantity button, and should show the Add to Cart button.
  
  - Cart Quantity Greater than 1: The quantity of the item in the cart should be decreased.
  
- On every quantity update operation, the text for the Quantity of item should be updated both in the Listing component as well as in the corresponding entry in the Cart Component.

- Items should be displayed in the Cart Component in the order they are added to Cart. 
  
- The list of products and the cart object is passed as Prop to the Product Listing Component and Cart Component respectively.

Each product object contains the following properties: 
- name: Name of the product. [STRING]
- price - The price of the Product. [NUMBER]
- id: Unique ID of the product. (Auto Generated) [NUMBER]
- image:  The image URL of the product. [STRING]
- cartQuantity: The quantity of the item in the cart. The default value should be 0. [NUMBER]

Each item in the cart, Type CartItem has the following properties:
- id: The ID of the product added to the cart. [NUMBER]
- item - The name of the product added to the cart. [STRING]
- quantity: The quantity of the item in the cart [NUMBER]

## Testing Requirements

The following data-testid/class attributes are required in the component for the tests to pass:
- Each product item in the Listing component should have the data-testid attribute of product-item-0, product-item-1, and so on.
- Each Add to Cart button should have the data-testid attribute 'btn-item-add'.
- Each Increase Quantity button should have the data-testid attribute 'btn-quantity-add'.
- Each Decrease Quantity button should have the data-testid attribute 'btn-quantity-subtract'.
- Each input to display the Cart Quantity in the Listing component should have the data-testid attribute 'cart-quantity'.
- The table rows `<tr>` in the Cart Component corresponding to items in the cart should have the data-testid attribute as cart-item-0, cart-item-1, and so on.
- The table data `<td>` containing the Name of the Item in the cart, should have the data-testid attribute 'cart-item-name'.
- The table data `<td>` containing the Quantity of the Item in the cart, should have the data-testid attribute 'cart-item-quantity'.
  
_Note: Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them._


## Project Specifications

**Read Only Files**
- [src/App.test.js]

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
