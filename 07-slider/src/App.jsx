import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const ID = setInterval(() => {
      if (value === 3) {
        return setValue(0);
      }
      setValue(value + 1);
    }, 5000);
    return () => {
      clearInterval(ID);
    };
  }, [value]);

  const prevBtn = () => {
    if (value === 0) {
      return setValue(3);
    }
    setValue(value - 1);
  };

  const nextBtn = () => {
    if (value === 3) {
      return setValue(0);
    }
    setValue(value + 1);
  };
  console.log(value);

  const { image, name, title, quote } = data[value];
  return (
    <section className="main-container">
      <button className="btn prev" onClick={prevBtn}>
        <FiChevronLeft />
      </button>
      <article className="person-info">
        <img src={image} alt={name} />
        <h5>{name}</h5>
        <p className="title">{title}</p>
        <p className="quote">{quote}</p>
        <FaQuoteRight className="quoteRight" />
      </article>
      <button className="btn next" onClick={nextBtn}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default App;
