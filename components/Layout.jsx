import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
