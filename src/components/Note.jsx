import React, { useState } from "react";
import Todolist from "./Todolist";

const Note = () => {
  const [inputText, setinputText] = useState("");
  const [item, setItem] = useState([]);

  const handelchenge = (e) => {
    setinputText(e.target.value);
  };

  const handaleclick = (e) => {
    e.preventDefault();
    setItem((previous) => {
      if (inputText === "") {
        return [...previous];
      } else {
        return [...previous, inputText];
      }
    });
    setinputText("");
  };

  const deleteItem = (id) => {
    setItem((previous) => {
      return previous.filter((additem, index) => {
        return index !== id;
      });
    });
  };

  const handaleallclear = () => {
    setItem([]);
  };

  return (
    <>
      <div className="todolist">
        <div className="heading">Todolist App</div>
        <div className="to-do-list">
          <form className="todo-form">
            <input
              type="text"
              placeholder="Enter Your Task"
              onChange={handelchenge}
              value={inputText}
              required
            />
            <button type="submit" onClick={handaleclick}>
              ADD
            </button>
          </form>

          <ul className="item-list">
            {item.map((additem, index) => {
              return (
                <Todolist
                  additem={additem}
                  key={index}
                  id={index}
                  onCheckd={deleteItem}
                />
              );
            })}
          </ul>
          <button type="reset" className="all-clear" onClick={handaleallclear}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;
