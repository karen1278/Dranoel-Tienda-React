import React from 'react'
import img from "../../assets/images/H 01-00.png"
const ProductList = () => {
    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="products">
                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={img} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className="price">$$$$</p>
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
                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={img} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className="price">$$$$</p>
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
                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={img} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className="price">$$$$</p>
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
                <div className="product">
                    <a href="#">
                        <div className="product_img">
                            <img src={img} alt="" />
                        </div>
                    </a>
                    <div className="product_footer">
                        <h1>Title</h1>
                        <p>Categoria</p>
                        <p className="price">$$$$</p>
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
            </div>
        </>
    )
}

export default ProductList
