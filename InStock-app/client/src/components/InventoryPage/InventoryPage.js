import React from "react";
import InventoryList from "./InventoryList";
import { Link } from "react-router-dom";

const InventoryPage = ({ products }) => {
  return (
    <div className="inventory">
      <div className="inventory__title-search-container">
        <h1 className="inventory__title">Inventory</h1>
        <input
          type="text"
          name="searchBar"
          className="inventory__search-bar"
          placeholder="Search"
        />
      </div>
      <InventoryList products={products} />
      <Link to="/newProduct" className="createProduct__link">
        <button className="inventory__button-add-product">+</button>
      </Link>
    </div>
  );
};

export default InventoryPage;
