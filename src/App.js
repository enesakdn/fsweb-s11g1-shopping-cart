import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./context/ProductContext";
import { CartContext } from "./context/CartContext";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
    return cart;
  };
  const removeItem = (item) => {
    const newFılter = cart.filter((a) => item.id !== a.id);
    setCart(newFılter);
  };

  return (
    <CartContext.Provider value={{ cart, removeItem }}>
      <ProductContext.Provider value={{ products, addItem }}>
        <div className="App">
          <Navigation />

          {/* Routelar */}
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>

            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </ProductContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
