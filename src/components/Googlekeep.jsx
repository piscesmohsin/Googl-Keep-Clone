import React from "react";
import { useState } from "react";
import Createnote from "./Createnote";
import Keepnote from "./Keepnote";
import "../Style/googlekeep.css";

const Googlekeep = () => {
  const [notes, setNotes] = useState([]);
  const addnewNote = (newnote) => {
    setNotes((previous) => {
      return [...previous, newnote];
    });
  };
const deletenote = (id) => {
  setNotes((previous) => {
  return (previous.filter((noteitem , index)=>{
    return index !== id }
    ))
  }); 
}
 
  return (
    <>
      <Createnote onAdd={addnewNote} />
      <div className="keep-notes-section">
      {notes.map((addnote, index) => {
        return (
          <Keepnote
            key={index}
            id={index}
            title={addnote.title}
            content={addnote.content}
            ondelete = {deletenote}
          />
        );
      })}</div>
    </>
  );
};
export default Googlekeep;
