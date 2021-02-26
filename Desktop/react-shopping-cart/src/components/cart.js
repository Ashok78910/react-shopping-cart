import React, { Component } from 'react'
import formatCurrency from '../util';

export default class cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {
                    cartItems.length === 0 ? (<div className = "cart cart-header">cart is empty</div>):
                (<div className = "cart cart-header">you have {cartItems.length}in the cart</div>
                ) }
            
            <div>
                <div className = "cart">
                    <ul className = "cart-items">
                        {cartItems.map(item => (
                            <li key = {item.id}>
                                <div>
                                    <img src = {item.image} alt={item.title}></img>
                                </div>
                                <div>
                                    <div>{item.title}</div>
                                    <div className = 'right'>
                                    {formatCurrency(item.price)} x {item.count}
                                    <button className = "button" onClick = {()=>this.props.removefromcart(item)}>
                                        Remove
                                    </button>
                                    </div>
                                   
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {cartItems.length!==0 && (
                    <div className = 'cart'> 
                    <div className = "total">
                        <div>
                        total:{" "}
                           {formatCurrency(cartItems.reduce((a,c) => a + (c.price*c.count),0))} 
                        </div>
                        <button className = 'button primary'>
                          proceed
                        </button>
                    </div>
                </div>
                )}
                
            </div>
            </div>
        )
    }
}
