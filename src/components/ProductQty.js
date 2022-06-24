import React, { Component } from "react";
import "./ProductQty.css"

class ProductQty extends Component{

    constructor(){
        super();
        this.state= {
            quantity: 1
        }
        
    }

    quantityAdd(){
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    quantityRemove(){
        this.setState({
            quantity: this.state.quantity - 1
        })

        if(1 > this.state.quantity ){
            this.setState({
                quantity: 0
            })
        }
    }

    render(){
    

    return (
        <div className="qty_container">
            <p>{this.state.quantity} Pc</p>
            <div className="qty_btns">
                <button className="add_btn" onClick={() => this.quantityAdd()}>&#43;</button>
                <button className="sub_btn" onClick={() => this.quantityRemove()}>&#8722;</button>
            </div>
        </div>
    );
}
}

export default ProductQty;