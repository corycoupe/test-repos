import React from "react";

// Leaving classNames the same as InventoryList because styling is the same thing.
// Only added "inventory__ul--background" class to <ul> to match mock-up's gray background."

const WarehouseInventoryList = () => {
  return (
    <ul className="inventory__ul inventory__ul--background">
      <li className="inventory__li-container">
        <label className="inventory__label">ITEM</label>
        <div className="inventory__product-name-description">
          <span className="inventory__product-name">Product Name Here</span>
          <span className="inventory__product-description">
            Here is a very brief description of the product…
          </span>
        </div>
        <label className="inventory__label">Last Ordered</label>
        <span className="inventory__last-ordered">05/24/2018</span>
        <label className="inventory__label">Location</label>
        <span className="inventory__location">Toronto, CAN</span>
        <label className="inventory__label">Quantity</label>
        <span className="inventory__quantity">12,000</span>
        <label className="inventory__label">Status</label>
        <span className="inventory__status">In Stock</span>
        <div className="inventory__button-edit"></div>
      </li>
    </ul>
  );
};

export default WarehouseInventoryList;
