import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from "./context";

const Navbar = () => {
  const { state } = useAppContext();

  return (
    <header>
      <h2 className="title">UseReducer</h2>
      <div className="cart-icon">
        <FaShoppingCart />
        <span className="cart-num">
          {state
            .map((item) => {
              return item.amount;
            })
            .reduce((acc, curVal) => {
              return acc + curVal;
            }, 0)}
        </span>
      </div>
    </header>
  );
};

export default Navbar;
