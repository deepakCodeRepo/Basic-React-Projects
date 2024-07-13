import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <h2 className="title">UseReducer</h2>
      <div className="cart-icon">
        <FaShoppingCart />
        <span className="cart-num">3</span>
      </div>
    </header>
  );
};

export default Navbar;
