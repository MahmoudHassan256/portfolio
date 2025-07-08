import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function LayoutPage({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutPage;
