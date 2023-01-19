import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Home} from "./home";
import {ProductList} from "./products/index";

export const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/products' exact element={<ProductList/>} />
      </Routes>
    </section>
  )
}
