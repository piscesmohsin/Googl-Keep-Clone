import React, { useState } from "react";

const Todolist = (props) => {
  const [isDone, setisDone] = useState(false);
  const handleitemclick = () => {
    setisDone((previous) => {
      return !previous;
    });
  };

  return (
    <li
      className="note"
      
    >
    <p onClick={handleitemclick}
      style={{ textDecoration: isDone ? "line-through" : "none" , fontSize : " 18px"} } >
      {props.additem}
</p>
      <span
        onClick={() => {
          return props.onCheckd(props.id);
        }}
      >
        &#10008;
      </span>
    </li>
  );
};

export default Todolist;
