import React from 'react';
import { Header } from './components/header';
import ProductsList from './components/products/index';
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Pages } from "./components/Pages";
import { DataProvider } from "./context/Dataprovider"
import {Cart} from "./components/cart"

function App() {

  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Cart/>
          <Pages />
        </Router>
      </div>
    </DataProvider>
  )
}

export default App;
