import React from "react";
import { ScCartCheckout } from "./scParts";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
