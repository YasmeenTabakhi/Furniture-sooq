import React from "react";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { CartTotal } from "../../components/CartTotal/CartTotal";

function Cart() {
  return (
    <div className="container">
      <ShoppingCart />
      {/* <CartTotal /> */}
    </div>
  );
}

export default Cart;
