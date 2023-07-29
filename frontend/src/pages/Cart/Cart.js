import React from "react";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { CartTotal } from "../../components/CartTotal/CartTotal";
import { UserInfoContext } from '../../context/UserInfoProvider';

function Cart({ userInfo }) {
  console.log(userInfo)

  return (
    <div className="container">
      <ShoppingCart userInfo={userInfo} />
      {/* <CartTotal /> */}
    </div>
  );
}

export default Cart;
