import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Googlekeep from "./Googlekeep";
const App = () => {
  return (
    // <div className='main-container'>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="/todolist" element={<Note />} />
        <Route exact path="/googlekeep" element={<Googlekeep />} />
      </Routes>
      {/* <Note/> */}
      <Footer />
    </Router>

    // </div>
  );
};

export default App;
