import React from "react";

const Footer = () => {
  const currentyear = new Date().getFullYear();

  return (
    <footer>
      <p style={{color:'black'}} >Copyright &copy; {currentyear}</p>
    </footer>
  );
};

export default Footer;
