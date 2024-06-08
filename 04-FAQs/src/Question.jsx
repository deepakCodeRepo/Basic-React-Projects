import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <article className="question-answer">
      <div className="question">
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setToggle(!toggle)}>
          {toggle ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </div>
      {toggle || <p>{info}</p>}
    </article>
  );
};

Question.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default Question;
