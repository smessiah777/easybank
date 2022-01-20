import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className='container'>copyright &copy; {year}</div>
      </footer>
    </>
  );
};

export default Footer;
