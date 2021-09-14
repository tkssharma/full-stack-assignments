import React, { Component } from "react";
import "./index.css";

export default class ProductList extends Component {
    constructor() {
        super();
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (product) => {
        this.props.handleAdd(product, '+')
    }
    removeHandleClick = (product) => {
        this.props.handleAdd(product, '-')
    }
    addHandleClick = (product) => {
        this.props.handleAdd(product, '+')
    }

    render() {
        return (
            <div className="layout-row wrap justify-content-center flex-70 app-product-list">
                {this.props.products.map((product, i) => {
                    return (
                        <section className="w-30"
                            data-testid={'product-item-' + i}
                            key={product.id}>
                            <div className="card ma-16">
                                <img alt="Your Cart" src={product.image}
                                    className="d-inline-block align-top product-image" />
                                <div className="card-text pa-4">
                                    <h5 className="ma-0 text-center">{product.name}</h5>
                                    <p className="ma-0 mt-8 text-center">${product.price}</p>
                                </div>
                                <div className="card-actions justify-content-center pa-4">

                                {product.cartQuantity  === 0 && <button onClick={() => this.handleClick(product)} className="x-small outlined" data-testid="btn-item-add">
                                        Add To Cart
                    </button> }

                                    <div className="layout-row justify-content-between align-items-center">
                                        {product.cartQuantity > 0 && <button onClick={() => this.removeHandleClick(product)} className="x-small icon-only outlined"
                                            data-testid="btn-quantity-subtract">
                                            <i className="material-icons">remove</i>
                                        </button>}

                                        {product.cartQuantity > 0 && <input type="number"
                                            disabled value={product.cartQuantity}
                                            className="cart-quantity" data-testid="cart-quantity" />}

                                        {product.cartQuantity > 0 && <button onClick={() => this.addHandleClick(product)} className="x-small icon-only outlined"
                                            data-testid="btn-quantity-add">
                                            <i className="material-icons">add</i>
                                        </button>}
                                    </div>

                                </div>
                            </div>
                        </section>
                    )
                })}

            </div>

        );
    }
}

export const UpdateMode = {
    ADD: 1,
    SUBTRACT: 0
}
