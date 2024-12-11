"use client";

import React from "react";
import Image from "next/image";

const CartPage = () => {
  const cartItems = [
    { id: 1, name: "Gradient Graphic T-Shirt", price: 145, quantity: 1, image: "/pic13.png" },
    { id: 2, name: "Checked Shirt", price: 180, quantity: 1, image: "/pic8.png" },
    { id: 3, name: "Skinny Fit Jeans", price: 240, quantity: 1, image: "/pic11.png" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 0.2 * subtotal; 
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>SHOP.CO</h1>
        <input
          type="text"
          placeholder="Search products..."
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            width: "300px",
          }}
        />
      </header>

      {/* Cart Section */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Cart Items */}
        <div style={{ flex: "2", padding: "10px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Your Cart</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
              <div style={{ flex: "1", marginLeft: "20px" }}>
                <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>{item.name}</h3>
                <p style={{ fontSize: "16px", color: "#888" }}>${item.price}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  style={{
                    border: "1px solid #ddd",
                    backgroundColor: "#fff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <span style={{ fontSize: "16px" }}>{item.quantity}</span>
                <button
                  style={{
                    border: "1px solid #ddd",
                    backgroundColor: "#fff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div
          style={{
            flex: "1",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Order Summary</h2>
          <div style={{ marginBottom: "15px" }}>
            <p style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", marginBottom: "5px" }}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </p>
            <p style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", marginBottom: "5px" }}>
              <span>Discount (20%)</span>
              <span>-${discount.toFixed(2)}</span>
            </p>
            <p style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", marginBottom: "5px" }}>
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </p>
            <hr style={{ margin: "15px 0", borderColor: "#ddd" }} />
            <p style={{ display: "flex", justifyContent: "space-between", fontSize: "18px", fontWeight: "bold" }}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Add promo code"
              style={{
                flex: "1",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
            <button
              style={{
                padding: "10px",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
                border: "none",
              }}
            >
              Apply
            </button>
          </div>
          <button
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
              border: "none",
            }}
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
