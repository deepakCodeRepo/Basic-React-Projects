import { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const setLocalStorage = (items) => {
  localStorage.setItem("listOfItems", JSON.stringify(items));
};

const getLocalStorage = () => {
  let list = localStorage.getItem("listOfItems");
  return list ? JSON.parse(list) : [];
};

function App() {
  const [itemList, setItemList] = useState(getLocalStorage());
  const [itemValue, setItemValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [index, setIndex] = useState(null);
  const [addAlert, setAddAlert] = useState(false);
  const [editAlert, setEditAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  useEffect(() => {
    const ID = setInterval(() => {
      setAddAlert(false);
      setDeleteAlert(false);
      setEditAlert(false);
    }, 4000);
    return () => clearInterval(ID);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemValue) {
      return;
    } else if (isEditing) {
      itemList[index] = itemValue;
      setLocalStorage(itemList);
      setIsEditing(false);
      setItemValue("");
      setEditAlert(true);
    } else {
      itemList.push(itemValue);
      setLocalStorage(itemList);
      // setItemList(itemList);
      setItemValue("");
      setAddAlert(true);
    }
  };

  const checkedItem = (itemIndex) => {
    setIsChecked(!isChecked);
    setIndex(itemIndex);
  };

  const editItem = (item, itemIndex) => {
    setItemValue(item);
    setIsEditing(true);
    setIndex(itemIndex);
  };

  const deleteItem = (itemIndex) => {
    let updatedItemList = itemList.filter((item, index) => index !== itemIndex);
    setItemList(updatedItemList);
    setLocalStorage(updatedItemList);
    setDeleteAlert(true);
    setIsEditing(false);
    setItemValue("");
  };

  useEffect(() => {
    const itemIndexinList = itemList.indexOf(itemValue);
    setIndex(itemIndexinList);
  }, [itemList]);

  return (
    <section className="main-container">
      <Alert
        addAlert={addAlert}
        deleteAlert={deleteAlert}
        editAlert={editAlert}
      />
      <form onSubmit={handleSubmit}>
        <h4 className="title">TODO List</h4>
        <div className="form-container">
          <input
            type="text"
            className="form-input"
            value={itemValue}
            onChange={(e) => setItemValue(e.target.value)}
          />
          <button className="add-btn" type="submit">
            {isEditing ? "Edit Item" : "Add Item"}
          </button>
        </div>
      </form>
      <List
        items={itemList}
        checkedItem={checkedItem}
        isChecked={isChecked}
        editItem={editItem}
        deleteItem={deleteItem}
        i={index}
      />
      {itemList.length !== 0 && (
        <button className="clear-btn" onClick={() => setItemList([])}>
          Clear Items
        </button>
      )}
    </section>
  );
}

export default App;
