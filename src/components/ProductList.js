import React from 'react'
import ProductCard from './ProductCard';
import "./ProductList.css"

function ProductList(props){
    
    return (
      <div className='product_lists'>
          {
            props.item.map((item, index)=>(
              <ProductCard productId={index}
                           productName = {item.productName} 
                           productPrice = {item.price}
                           productImage = {item.productImage}
                           key = {item.item}/>
            ))
          }
      </div>
    );
}

export default ProductList