import { useState, useEffect } from "react";
import rgbToHex from "./utils";
import PropTypes from "prop-types";

const SingleColor = ({ rgb, weight, index }) => {
  const colorValue = rgbToHex(rgb[0], rgb[1], rgb[2]);

  return (
    <article className="color false">
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{colorValue}</p>
    </article>
  );
};

SingleColor.propTypes = {
  rgb: PropTypes.array.isRequired,
  weight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default SingleColor;
