import { useState } from "react";
import data from "./data";

function App() {
  const [texts, setTexts] = useState(data.slice(0, 2));
  const [value, setValue] = useState(2);

  const generateText = (e) => {
    e.preventDefault();
    const newTexts = data.slice(0, value);
    setTexts(newTexts);
  };
  // console.log(texts);

  return (
    <section className="main-container">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={generateText}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          id="amount"
          type="number"
          name="amount"
          min={1}
          max={8}
          step={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      <article className="lorem-text">
        {texts.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
