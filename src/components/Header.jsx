import React from "react";
import Greeting from "./Greeting";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1>
     
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          
          Keeper
        </Link>
      </h1>
      <div className="greeting">
        <Greeting />
      </div>
    </header>
  );
};

export default Header;
