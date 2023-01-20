import React from 'react'
import Card from "../../assets/images/logo.png"

export const Cart = () => {
    return (
        <div className="carts">
            <div className="cart">
                <div className="cart_close">
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="cart_center">
                    <div className="cart_item">
                        <img src={Card} alt="" />
                        <div>
                            <h3>title</h3>
                            <p className="price">$$</p>
                        </div>
                        <div>
                            <box-icon name='chevron-up'></box-icon>
                            <p className='cantidad'>1</p>
                            <box-icon name='chevron-down' ></box-icon>
                        </div>
                        <div className='remove_item'>
                            <box-icon name='trash'></box-icon>
                        </div>
                    </div>
                </div>
                <div className="cart_footer">
                    <h3>Total:$$$</h3>
                    <button className='btn'>Payment</button>
                </div>
            </div>
        </div>
    )
}
