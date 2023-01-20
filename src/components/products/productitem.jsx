import React from 'react'
import img from "../../assets/images/H 01-00.png"


export const ProductItem = ({ id, title, price, image, category }) => {
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
                <button className='btn'>
                    Añadir al carrito
                </button>
                <div>
                    <a href="#" className='btn'>vista</a>
                </div>
            </div>
        </div>
    )
}
