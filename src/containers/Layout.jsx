import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";
import "../assets/styles/CoreStyle.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="App__childrenContainer card">{children}</div>
    <Footer />
  </>
);

export default Layout;
