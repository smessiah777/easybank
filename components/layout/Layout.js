import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Nav /> */}
      {children}
    </div>
  );
};

export default Layout;
