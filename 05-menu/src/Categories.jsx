import PropTypes from "prop-types";

const Categories = ({ btn, filterItems }) => {
  return <button onClick={() => filterItems(btn)}>{btn} </button>;
};

Categories.propTypes = {
  btn: PropTypes.string.isRequired,
  filterItems: PropTypes.func.isRequired,
};

export default Categories;
