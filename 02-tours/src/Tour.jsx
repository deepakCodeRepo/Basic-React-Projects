import PropTypes from "prop-types";
import { useContext } from "react";
import { useState } from "react";
import { toursContext } from "./App";

const Tour = ({ id, image, price, name, info }) => {
  const [toggle, setToggle] = useState(true);

  const removeTour = useContext(toursContext);

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <h3>$ {price}</h3>
      <div className="tour-info">
        <h2>{name}</h2>
        <h4>
          {toggle ? info.slice(0, 201).concat("...") : info}
          <button
            className="toggle-info-btn"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "Read More" : "Show Less"}
          </button>
        </h4>

        <button
          type="button"
          className="remove-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

Tour.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default Tour;
