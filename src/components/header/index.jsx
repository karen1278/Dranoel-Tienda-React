import React from 'react'
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <Link to="/">
                <div className='logo'>
                    <img src={logo} alt='logo' width={150} />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/products">PRODUCTOS</Link>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item_total'>0</span>
            </div>
        </header>
    )
}

export default Header
