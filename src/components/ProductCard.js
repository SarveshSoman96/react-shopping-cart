import React, { Component } from 'react';
import "./ProductCard.css"
import ProductQty from './ProductQty';

class ProductCard extends Component{
 

    render(){

    return(
        <div className='product_card'>
            <p className='product Index'>{this.props.productId + 1}</p>
            <div className='product_img'>
                image here
            </div>
            <p className='product_name'>{this.props.productName}</p>
            <ProductQty />
            <p className='product_price'>{this.props.productPrice}</p>
            <p className='product_price_total'>total</p>
        </div>
    );

}
}

export default ProductCard;