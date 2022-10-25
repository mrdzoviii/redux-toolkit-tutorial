import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

function Modal() {
  const dispatch = useDispatch();

  const confirmHandler = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  const cancelHandler = () => {
    dispatch(closeModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={confirmHandler}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={cancelHandler}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
