import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const first15 = fakeData.slice(0, 15);
  const [products, setProducts] = useState(first15);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (Product) => {
    const newCart = [...cart, Product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product handleAddProduct={handleAddProduct} product={pd}></Product>
        ))}
      </div>
      <div className="cart-container">
        <div className="stillDisplay">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
