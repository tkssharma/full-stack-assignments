import React, { Component } from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();
        const products = [...PRODUCTS].map((product, index) => {
            product.id = index + 1;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        this.state = {
            cart: {
                items: []
            },
            products
        }
    }
    handleAdd = (product, action) => {
        console.log(product);
        if (action === '+') {
            const items = [...this.state.cart.items];
            const itemExist = items.filter(i => i.id === product.id).length > 0;
            if (itemExist) {
                const newItems = items.map(i => {
                    if (i.id === product.id) {
                        i.cartQuantity = i.cartQuantity + 1;
                    }
                    return i;
                })
                this.setState({
                    cart: {
                        items: newItems
                    }
                })
            } else {
                product.cartQuantity = 1;
                this.state.cart.items.push(product);
                this.setState({
                    cart: {
                        items: this.state.cart.items
                    }
                })
            }
        } else if (action === '-') {
            const items = [...this.state.cart.items];
            const newItems = items.map(i => {
                if (i.id === product.id) {
                    i.cartQuantity =i.cartQuantity -1;
                }
                return i;
            }).filter(i => i.cartQuantity > 0);
            this.setState({
                cart: {
                    items: newItems
                }
            })
        }
    }


    render() {
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row shop-component">
                    <ProductList handleAdd={this.handleAdd} products={this.state.products} />
                    <Cart cart={this.state.cart} />
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
