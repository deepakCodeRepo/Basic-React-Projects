import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

let categories = [];
data.forEach((item) => {
  if (!categories.includes(item.category)) {
    categories.push(item.category);
  }
});
console.log(categories);

function App() {
  const [items, setItems] = useState(data);

  const filterItems = (category) => {
    const filteredItems = data.filter((item) => item.category === category);
    setItems(filteredItems);
  };

  return (
    <main>
      <section className="main-container">
        <h1>Our Menu</h1>
        <div className="underline"></div>
        <nav className="categories-btn">
          <button onClick={() => setItems(data)}>All </button>
          {categories.map((btn, index) => {
            return (
              <Categories key={index} btn={btn} filterItems={filterItems} />
            );
          })}
        </nav>
        <section className="menu-container">
          {items.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
