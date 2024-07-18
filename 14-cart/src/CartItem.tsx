import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import type { Item } from "./context";
import { useAppContext } from "./context";

type CartItemProps = {
  item: Item;
};

const CartItem = ({ item }: CartItemProps) => {
  const { dispatch } = useAppContext();

  function removeItem(): void {
    dispatch({ type: "remove", id: item.id });
  }

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} />
      <div className="item-info">
        <h5>{item.title}</h5>
        <p>${item.price}</p>
        <button className="btn-remove" onClick={removeItem}>
          remove
        </button>
      </div>
      <div className="inc-dec">
        <button
          className="btn-inc"
          onClick={() => dispatch({ type: "increment", id: item.id })}
        >
          <IoIosArrowUp />
        </button>
        <span className="amount">{item.amount}</span>
        <button
          className="btn-dec"
          onClick={() => dispatch({ type: "decrement", id: item.id })}
        >
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
