"use client";

import { useContext } from "react";
import { CartContext } from "../Question11/page";

// Reuse the Product type
type Product = {
  id: number;
  name: string;
  price: number;
};

export function ProductList() {
  const context = useContext(CartContext);
  if (!context) return null;

  const { addItems } = context;

  const products: Product[] = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Watch", price: 2000 },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => addItems(item)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export function Cart() {
  const context = useContext(CartContext);
  if (!context) return null;

  const { cartItems, removeItems, total } = context;

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              {item.name} - ₹{item.price}
              <button onClick={() => removeItems(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}
