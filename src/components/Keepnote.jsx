import React from "react";
import "../Style/googlekeep.css";
const Keepnote = (props) => {

  const handelnoteclick = () => {
    props.ondelete(props.id)
  }
  return (
    <>
        <div className="keep-note">
         
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handelnoteclick} >Delete</button>
        </div>
      
    </>
  );
};

export default Keepnote;
