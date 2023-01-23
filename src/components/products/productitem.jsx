import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { DataContext } from "../../context/Dataprovider"

export const ProductItem = ({ id, title, price, image, category }) => {
    
    const value = useContext(DataContext);
    const addCart = value.addCart;

    return (
        <div className="product">
            <a href="#">
                <div className="product_img">
                    <img src={image} alt={title} />
                </div>
            </a>
            <div className="product_footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">{price}</p>
            </div>
            <div className="buttom">
                <button className='btn' onClick={() => addCart(id)}>Añadir al carrito</button>
                <div>
                    <a href="#" className='btn'>vista</a>
                </div>
            </div>
        </div>
    )
}
