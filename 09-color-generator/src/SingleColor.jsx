import { useEffect, useState } from "react";
import rgbToHex from "./utils";
import PropTypes from "prop-types";

const SingleColor = ({ rgb, weight, type }) => {
  const [alert, setAlert] = useState(false);

  const colorValue = rgbToHex(...rgb);
  const bgColor = rgb.join(",");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className="color"
      style={{ backgroundColor: `rgb(${bgColor})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(colorValue);
      }}
    >
      <p className={type === "shade" ? "pv" : "percent-value"}>{weight}%</p>
      <p className={type === "shade" ? "pv" : "color-value"}>{colorValue}</p>
      {alert && <p>Copy to Clipboard</p>}
    </article>
  );
};

SingleColor.propTypes = {
  rgb: PropTypes.array.isRequired,
  weight: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default SingleColor;
