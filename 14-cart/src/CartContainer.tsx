import React from "react";
import CartItem from "./CartItem";
import data from "./data";

export type Item = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

const CartContainer = () => {
  return (
    <div className="cart-container">
      <h1>Your Bag</h1>
      <main>
        <section className="cart-list">
          {data.map((item: Item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </section>
      </main>
      <footer>
        <hr />
        <div className="total">
          <h3>Total</h3>
          <p className="total-amt">$2119.9</p>
        </div>
        <button className="btn-clear-cart" onClick={() => console.log("clear")}>
          Clear Cart
        </button>
      </footer>
    </div>
  );
};

export default CartContainer;
