import React from "react";

const Footer = () => {
  const currentyear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {currentyear}</p>
    </footer>
  );
};

export default Footer;
