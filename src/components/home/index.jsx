import React from 'react'
import Cover from "../../assets/images/cover.png"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className='home'>
      <Link to="/">
        <h1 className='title'>Inicio</h1>
      </Link>
      <img className='coverimg' src={Cover} alt="inicio" />
      <Link to="/products">
        <h1 className='title'>Productos</h1>
      </Link>
    </div>
  )
}


