import { useState } from "react";
import SingleColor from "./SingleColor";

// import Values from 'values.js'

function App() {
  return (
    <main>
      <section className="container">
        <h4>color generator</h4>
        <form>
          <input type="color" />
          <input type="text" placeholder="#f15025" />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="colors-container">
        <article className="color false">
          <p className="percent-value">100%</p>
          <p className="color-value">#ffffff</p>
        </article>
      </section>
    </main>
  );
}

export default App;
