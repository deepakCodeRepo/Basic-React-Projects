import { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#f15025");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <main>
      <section className="container">
        <h4>color generator</h4>
        <form onSubmit={handleSubmit}>
          <input type="color" onChange={(e) => setColor(e.target.value)} />
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className={error ? "error" : null}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="colors-container">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </main>
  );
}

export default App;
