import { FaEdit, FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

const List = ({ items, editItem, deleteItem, checkedItem, isChecked, i }) => {
  return (
    <div className="items">
      {items.map((item, index) => {
        return (
          <div className="single-item" key={index}>
            <input type="checkbox" onClick={() => checkedItem(index)} />
            <p
              className={isChecked && i === index ? "isChecked" : "notChecked"}
            >
              {item}
            </p>
            <button className="edit-btn" onClick={() => editItem(item, index)}>
              <FaEdit />
            </button>
            <button className="delete-btn" onClick={() => deleteItem(index)}>
              <FaTrash />
            </button>
          </div>
        );
      })}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  checkedItem: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  i: PropTypes.number.isRequired,
};

export default List;
