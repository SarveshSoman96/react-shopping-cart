import React from "react";
import "./Checkout.css";

function Checkout(props){


    return(
        <footer className="checkout">
            <form className="payment_options">
                <p><input type="radio" name="payment" value="Credit Card / Debit Card" />Credit Card / Debit Card</p>
                <p><input type="radio" name="payment" value="Paytm/Wallet" />Paytm/Wallet</p>
                <p><input type="radio" name="payment" value="UPI Payment" />UPI Payment</p>
            </form>
            <div className="line"></div>
            <form className="payment_button">
                <button type="button">Pay Now</button>
            </form>
        </footer>
    );
}

export default Checkout;