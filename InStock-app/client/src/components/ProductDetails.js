import React from "react";
const ProductDetails = ({ handleEdit }) => {
  return (
    <>
      <section className="product">
        <header className="product__header">
          <h1 className="product__header-title">Product Name</h1>
        </header>
        <section className="product__body">
          <div className="product__body-description">
            <h3 className="product__body-description--header">
              ITEM DESCRIPTION
            </h3>
            <p className="product__body-description--paragraph">
              description of product
            </p>
          </div>
          <div className="product__body-details">
            <div className="product__body-details-container">
              <h3 className="product__body-details--header">ORDERED BY</h3>
              <p className="product__body-details--paragraph"></p>
            </div>
            <div className="product__body-details-container">
              <h3 className="product__body-details--header">
                REFERENCE NUMBER
              </h3>
              <p className="product__body-details--paragraph"></p>
            </div>
            <div className="product__body-details-container">
              <h3 className="product__body-details--header">LAST ORDERED</h3>
              <p className="product__body-details--paragraph"></p>
            </div>
            <div className="product__body-details-container">
              <h3 className="product__body-details--header">LOCATION</h3>
              <p className="product__body-details--paragraph"></p>
            </div>
            <div className="product__body-details-container">
              <h3 className="product__body-details--header">QUANTITY</h3>
              <p className="product__body-details--paragraph"></p>
            </div>
            <div className="product__body-details-container">
              <h3 className="product__body-details--header">CATEGORIES</h3>
              <p className="product__body-details--paragraph"></p>
            </div>
          </div>
        </section>
      </section>
      <button onClick={handleEdit}>EDIT</button>
    </>
  );
};
export default ProductDetails;
