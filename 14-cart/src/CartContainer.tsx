import CartItem from "./CartItem";
import { useAppContext } from "./context";
import type { Item } from "./context";

const CartContainer = () => {
  const { state, dispatch } = useAppContext();

  return (
    <div className="cart-container">
      <h1>Your Bag</h1>
      {state.length === 0 ? (
        <h2 className="empty-cart">is currently empty</h2>
      ) : (
        <>
          <main>
            <section className="cart-list">
              {state.map((item: Item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </section>
          </main>
          <footer>
            <hr />
            <div className="total">
              <h3>Total</h3>
              <p className="total-amt">
                $
                {state
                  .map((item) => {
                    return parseFloat(item.price) * item.amount;
                  })
                  .reduce((acc, curVal) => {
                    return acc + curVal;
                  }, 0)
                  .toFixed(2)}
              </p>
            </div>
            <button
              className="btn-clear-cart"
              onClick={() => dispatch({ type: "clear" })}
            >
              Clear Cart
            </button>
          </footer>
        </>
      )}
    </div>
  );
};

export default CartContainer;
