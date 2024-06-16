import { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [itemList, setItemList] = useState([]);
  const [itemValue, setItemValue] = useState(null);

  // useEffect(() => {
  //   setItemList(itemList);
  // }, [itemList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    itemList.push(itemValue);
    setItemList(itemList);
  };
  // console.log(itemList);

  return (
    <section className="main-container">
      <Alert />
      <form onSubmit={handleSubmit}>
        <h4>TODO List</h4>
        <div className="form-container">
          <input
            type="text"
            className="form-input"
            onChange={(e) => setItemValue(e.target.value)}
          />
          <button className="add-btn" type="submit">
            Add Item
          </button>
        </div>
      </form>
      <div className="items">
        {itemList.map((item, index) => {
          return <List key={index} item={item} />;
        })}
      </div>
      {itemList.length !== 0 && (
        <button className="clear-btn" onClick={() => setItemList([])}>
          Clear Items
        </button>
      )}
    </section>
  );
}

export default App;
