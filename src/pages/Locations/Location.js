import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Location.css";

const Location = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>Location Page</h1>
      </div>
      <Footer />
    </>
  );
}
export default Location;