import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const clearCartHandler = () => dispatch(openModal());

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCartHandler}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
