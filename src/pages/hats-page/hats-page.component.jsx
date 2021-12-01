import React from "react";
import "./hats-page.styles.scss";
import Navbar from "../../components/nav-bar/navbar.component";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "../shop/shop.data";

const HatsPage = () => {
  return (
    <div className="hatspage">
      <Navbar />
    </div>
  );
};

export default HatsPage;
