import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id} className="card mb-3 p-3">
            <div className="d-flex align-items-center">
              {/* Product Image */}
              <img
                src={`https://ecom-eaj8.onrender.com${item.image}`}
                alt={item.name}
                style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "20px" }}
                className="rounded"
              />

              {/* Product Details */}
              <div className="flex-grow-1">
                <h5>{item.name}</h5>
                <p className="mb-2">Price: Rs. {item.price}</p>

                {/* Quantity controls */}
                <div className="d-flex align-items-center mb-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => decreaseQuantity(item._id)}
                  >
                    −
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => increaseQuantity(item._id)}
                  >
                    +
                  </button>
                </div>

                <strong>Total: ${item.price * item.quantity}</strong>
              </div>

              {/* Remove Button */}
              <button
                className="btn btn-danger ms-3"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
