import React, { useState } from "react";
import "../Style/googlekeep.css";
const Createnote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handelkeepchenge = (event) => {
    const { name, value } = event.target;

    setNote((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });

  
  };
  const handelsubmite = (event) => {
    
      props.onAdd(note);

    setNote({ title: "", content: "" });
  };

  return (
    <>
      <div className="keep-main-container">
        <form className="keep-form">
          <input
            name="title"
            value={note.title}
            type="text"
            className="input-title"
            onChange={handelkeepchenge}
            placeholder="Title"
            required
          />
          <input
            name="content"
            value={note.content}
            type="text"
            onChange={handelkeepchenge}
            className="input-title"
            placeholder="Content"
            required
          />
          <button type="submit" className="btn" onClick={handelsubmite}>
            add
          </button>
        </form>
      </div>
    </>
  );
};

export default Createnote;
