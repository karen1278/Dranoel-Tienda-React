import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import Logo from "../../assets/images/logo.png"
import { DataContext } from "../../context/Dataprovider"


export const Cart = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [cart, setCart] = value.cart;
    const [total] = value.total;


    const tooglefalse = () => {
        setMenu(false)
    }


    const show1 = menu ? "cartts show" : "cartts";
    const show2 = menu ? "cartt show" : "cartt";

    const suma = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1;
            }
            setCart([...cart])
        })
    }
    const resta = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
            }
            setCart([...cart])
        })
    }

    const removeProduct = id => {
        if (window.confirm("Quieres retirar el producto")) {
            cart.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }

    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="cartt_close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>


                <div className="cartt_center">
                    {
                        cart.length === 0 ? <h2 style={{
                            textAlign: "center",
                            fontSize: "3rem",

                        }}> Carrito Vacio</h2> : <>
                            {
                                cart.map((product) => (
                                    <div className="cartt_item" key={product.id}>
                                        <img src={product.image} alt="" />
                                        <div>
                                            <h3>{product.title}</h3>
                                            <p className="price">{product.price}</p>
                                        </div>
                                        <div>
                                            <box-icon name='chevron-up' onClick={() => suma(product.id)} ></box-icon>
                                            <p className='cantidad'>{product.cantidad}</p>
                                            <box-icon name='chevron-down' onClick={() => resta(product.id)} ></box-icon>
                                        </div>
                                        <div className='remove_item' onClick={() => removeProduct(product.id)}>
                                            <box-icon name='trash'></box-icon>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    }
                </div>

                <div className="cartt_footer">
                    <h3>Total: ${total}</h3>
                    <button className='btn'>Payment</button>
                </div>
            </div>
        </div>
    )
}
