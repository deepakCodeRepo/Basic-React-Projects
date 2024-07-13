import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import type { Item } from "./CartContainer";

type CartItemProps = {
  item: Item;
};

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} />
      <div className="item-info">
        <h5>{item.title}</h5>
        <p>${item.price}</p>
        <button className="btn-remove">remove</button>
      </div>
      <div className="inc-dec">
        <button className="btn-inc" onClick={() => console.log("inc")}>
          <IoIosArrowUp />
        </button>
        <span className="amount">{item.amount}</span>
        <button className="btn-dec" onClick={() => console.log("dec")}>
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
