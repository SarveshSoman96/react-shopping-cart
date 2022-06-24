import './App.css';
import React from 'react';
import CartHeader from "./components/CartHeader.js";
import ShoppingCart from './components/ShoppingCart.js';
import Checkout from './components/Checkout';
import GrandTotal from './components/GrandTotal';
import ProductList from './components/ProductList';


let ProductItemList = [
  {
      item: 1,
      productName: "washing powder nirma",
      price: 120,
      productImage : "../Assets/nirma powder.jpg"
  },
  {
      item: 2,
      productName: "Godrej Sinthol Soap",
      price: 34,
      productImage : "../Assets/cinthol soap.jpg"
  },
  {
      item: 3,
      productName: "Thumbs Up 1.75L",
      price: 70,
      productImage : "../Assets/thumbs up.jpg"
  },
  {
      item: 4,
      productName: "Fresh Apple (Shimla)",
      price: 20,
      productImage : "../Assets/apples.jpg"
  },
  {
      item: 5,
      productName: "Ashirwad aata (15kg)",
      price: 390,
      productImage : "../Assets/ashirwad aata.jpg"
  }
]



function App() {
  return (
    <div className='cart_container'>
      <CartHeader itemlist={ProductItemList} />
      <ShoppingCart />
      <ProductList item={ProductItemList} />
      <GrandTotal />
      <Checkout />
    </div>
  );
}

export default App;
