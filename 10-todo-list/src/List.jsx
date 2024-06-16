import { FaEdit, FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

const List = ({ item }) => {
  return (
    <div className="single-item">
      <input type="checkbox" />
      <p>{item}</p>
      <button className="edit-btn">
        <FaEdit />
      </button>
      <button className="delete-btn">
        <FaTrash />
      </button>
    </div>
  );
};

List.propTypes = {
  item: PropTypes.string.isRequired,
};

export default List;
