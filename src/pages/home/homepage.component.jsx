import React from "react";
import "./homepage.styles.scss";
import Navbar from "../../components/nav-bar/navbar.component";
import Directory from "../../components/directory/directory.component.jsx";

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
