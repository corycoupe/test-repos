import React from "react";

const WarehouseDetails = () => {
  return (
    <div className="warehouse-details__info-wrapper">
      <div className="warehouse-details__address-wrapper">
        <label className="warehouse-details__label">Address</label>
        <div className="warehouse-details__text-wrapper">
          <span className="warehouse-details__text">123 Main Street W.</span>
          <span className="warehouse-details__text warehouse-details__text--italic">
            Suite 201
          </span>
        </div>
        <div className="warehouse-details__text-wrapper">
          <span className="warehouse-details__text warehouse-details__text--italic">
            Toronto, ON
          </span>
          <span className="warehouse-details__text warehouse-details__text--italic">
            M65GB7 CA
          </span>
        </div>
      </div>
      <div className="warehouse-contact-wrapper">
        <label className="warehouse-details__label">Contact</label>
        <div className="warehouse-details__text-wrapper">
          <span className="warehouse-details__text">Mara Weinberg</span>
          <span className="warehouse-details__text warehouse-details__text--italic">
            Warehouse Manager
          </span>
        </div>
        <div className="warehouse-details__text-wrapper">
          <span className="warehouse-details__text warehouse-details__text--italic">
            +1 416 678 2345
          </span>
          <span className="warehouse-details__text warehouse-details__text--italic">
            weinberg@instock.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDetails;
