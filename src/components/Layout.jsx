import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/App.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="App__childrenContainer">{children}</div>
    <Footer />
  </>
);

export default Layout;
