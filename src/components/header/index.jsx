import React, { useContext } from 'react'
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom"
import { DataContext } from "../../context/Dataprovider"


export const Header = () => {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart] = value.cart

    const tooglemenu = () => {
        setMenu(!menu)
    }

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
            <div className='cart' onClick={tooglemenu}>
                <box-icon name="cart"></box-icon>
                <span className='item_total'>{cart.length}</span>
            </div>
        </header>
    )
}

export default Header
