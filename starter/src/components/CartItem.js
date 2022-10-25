import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const removeHandler = () => dispatch(removeItem(id));
  const increaseHandler = () => dispatch(increase(id));
  const decreaseHandler = () => {
    if (amount === 1) {
      dispatch(removeItem(id));
      return;
    }
    dispatch(decrease(id));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={removeHandler}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={increaseHandler}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={decreaseHandler}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
