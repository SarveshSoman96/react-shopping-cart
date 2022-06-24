import React from "react";
import "./CartHeader.css";


function CartHeader(props){

    let list_length = props.itemlist.length;

        return(
            <header className="cart_header">
                <div className="header_logo">
                    <p>Shopping</p> <i className="fa-solid fa-cart-shopping"></i>
                    <p>Welcome Sarvesh Soman</p>
                </div>
                <div className="cart_icon">
                <i className="fa-solid fa-cart-shopping"></i>
                       <span>{list_length}</span>
                </div>
            </header>
        )

}

export default CartHeader;