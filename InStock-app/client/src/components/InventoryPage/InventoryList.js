import React from "react";
import { Link } from "react-router-dom";

const InventoryList = (props) => {
  const productsList = () => {
    if (props.products === undefined) {
      return <p>loading products list...</p>;
    }
    return props.products.map((product) => {
      return (
        <li key={product.productId} className="inventory__li-container">
          <div className="inventory__product-name-description">
            <Link to="/inventory/:productId">
              <span className="inventory__product-name">
                {product.productName}
              </span>
            </Link>
            <span className="inventory__product-description">
              {product.productDescription}
            </span>
          </div>

          <span className="inventory__last-ordered">{product.lastOrdered}</span>
          <span className="inventory__location">
            get location from warehouse input
          </span>
          <span className="inventory__quantity">{product.quantity}</span>
          <span className="inventory__status">In Stock</span>
          <div className="inventory__button-edit"></div>
        </li>
      );
    });
  };
  return (
    <>
      <label className="inventory__label">ITEM</label>
      <label className="inventory__label">Last Ordered</label>
      <label className="inventory__label">Location</label>
      <label className="inventory__label">Quantity</label>
      <label className="inventory__label">Status</label>
      <ul className="inventory__ul">{productsList()}</ul>
    </>
  );
};

export default InventoryList;
