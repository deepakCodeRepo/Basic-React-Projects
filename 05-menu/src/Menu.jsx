import PropTypes from "prop-types";

const Menu = ({ title, desc, price, img }) => {
  return (
    <article className="single-item">
      <img src={img} alt={title} />
      <div className="title-price">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <h5>{desc}</h5>
    </article>
  );
};

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default Menu;
