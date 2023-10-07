import React from "react";
import "../Style/googlekeep.css";
const Keepnote = (props) => {

  const handelnoteclick = () => {
    props.ondelete(props.id)
  }
  return (
    <>
        <div className="keeps">
       <div><h2>{props.title}</h2></div>
       <hr />
        <div><p>{props.content}</p></div>
        <button id="Del_btn"  onClick={handelnoteclick} >Delete</button>
       
        </div>
    </>
  );
};

export default Keepnote;
