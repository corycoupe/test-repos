import React from "react";
import { Link } from "react-router-dom";
import WarehouseInventoryList from "./WarehouseInventoryList";
import WarehouseDetails from "./WarehouseDetails";

const WarehouseDetailsPage = () => {
  return (
    <div className="warehouse-details">
      <div className="warehouse-details__title-back-container">
        <h1 className="warehouse-details__title">Warehouse Name</h1>
        <Link to="/locations">
          <div className="warehouse-details__back" />
        </Link>
      </div>
      <WarehouseDetails />
      <WarehouseInventoryList />
    </div>
  );
};

export default WarehouseDetailsPage;
