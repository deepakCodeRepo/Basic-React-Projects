import { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <div className="main-container">
        <div className="content-container">
          <h1>{people.length} Birthdays Today</h1>
          {people.map((person) => {
            return <List key={person.id} {...person} />;
          })}
          <button
            onClick={() => {
              setPeople([]);
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
