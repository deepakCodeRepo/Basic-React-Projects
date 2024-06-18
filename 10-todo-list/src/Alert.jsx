import PropTypes from "prop-types";

const Alert = ({ addAlert, deleteAlert, editAlert }) => {
  return (
    <>
      {addAlert && <h4 className="addAlert">Item added to the List</h4>}
      {deleteAlert && <h4 className="deleteAlert">Item deleted</h4>}
      {editAlert && <h4 className="editAlert">Item changed</h4>}
    </>
  );
};

Alert.propTypes = {
  addAlert: PropTypes.bool.isRequired,
  deleteAlert: PropTypes.bool.isRequired,
  editAlert: PropTypes.bool.isRequired,
};

export default Alert;
