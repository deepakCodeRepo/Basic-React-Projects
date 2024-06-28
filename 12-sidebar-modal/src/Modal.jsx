import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isShowModal, setShowModal } = useGlobalContext();

  return (
    <section
      className={isShowModal ? "modal-overlay show-modal" : "modal-overlay"}
    >
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={() => setShowModal(false)}>
          <FaTimes />
        </button>
      </div>
    </section>
  );
};

export default Modal;
