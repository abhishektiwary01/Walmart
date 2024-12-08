import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer"

const CartPage = () => {
  const [cart, setCart] = useState([]); // Store cart items

  // Load cart data from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div><Header></Header>
    <div style={{ padding: '120px' }}>
      
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ display: 'flex', marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100px', height: '100px', objectFit: 'contain', marginRight: '10px' }}
              />
              <div style={{ flex: 1 }}>
                <h5>{item.title}</h5>
                <p>${item.price}</p>
              </div>
              <button
                style={{
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      
    </div>
    <Footer></Footer>
    </div>

  );
};

export default CartPage;