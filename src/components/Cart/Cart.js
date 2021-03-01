import React from "react";
import cameras from "../../fakeData/camera";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }
  let shipping = 0;

  if (total > 45) {
    shipping = 0;
  } else if (total > 20) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const tax = (total / 10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);

  return (
    <div>
      <h3>ORDER Summary</h3>
      {/* <p>
        <small>Name: {}</small>
      </p> */}
      <h5>items Ordered : {cart.length}</h5>

      <p>
        <small>Shipping Cost: $ {shipping}</small>
      </p>
      <p>
        <small>Tax + Vat : $ {tax}</small>
      </p>
      <p>Total Price : $ {grandTotal}</p>
    </div>
  );
};

export default Cart;
