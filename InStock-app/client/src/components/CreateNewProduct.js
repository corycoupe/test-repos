import React from "react";
import { Link } from "react-router-dom";

const CreateNewProduct = ({ handleUpload }) => {
  const onUpload = (event) => {
    event.preventDefault();
    console.log("new product form was submitted");
    const name = event.target.productname.value;
    const lastOrdered = event.target.lastorderdate.value;
    const warehouseid = event.target.warehouseid.value;
    const quantity = event.target.quantity.value;
    // const status = event.target.status.value;
    const description = event.target.description.value;
    if (
      name !== "" &&
      lastOrdered !== "" &&
      warehouseid !== "" &&
      quantity !== ""
      // status !== "" &&
      //description !== ""
    ) {
      handleUpload(
        event,
        name,
        lastOrdered,
        warehouseid,
        quantity,
        description
        // status,
      );
    } else {
      alert("insert ALL fields");
    }
  };
  return (
    <div className="productform">
      <h2 className="productform__title">Create New</h2>
      <div className="productform__container">
        <form onSubmit={onUpload} className="productForm__body" method="get">
          <div className="productForm__input-wrap">
            <label className="productForm__label" htmlFor="productname">
              PRODUCT:
            </label>
            <input
              type="text"
              id="product-id"
              className="productForm__field"
              placeholder="Item Name"
              name="productname"
            />
          </div>
          <div className="productForm__input-wrap">
            <label className="productForm__label" htmlFor="date">
              LAST ORDERED:
            </label>
            <input
              type="date"
              id="order-id"
              className="productForm__field"
              placeholder="yyyy-mm-dd"
              name="lastorderdate"
            />
          </div>
          <div className="productForm__input-wrap">
            <label className="productForm__label" htmlFor="warehouse">
              WAREHOUSE:
            </label>
            <input
              type="text"
              id="warehouse-id"
              className="productForm__field"
              placeholder="select"
              name="warehouseid"
            />
          </div>
          <div className="productForm__input-wrap">
            <label className="productForm__label" htmlFor="location">
              LOCATION:
            </label>
          </div>
          <div className="productForm__input-wrap">
            <label className="productForm__label" htmlFor="quantity">
              QUANTITY:
            </label>
            <input
              type="text"
              className="productForm__field"
              placeholder="enter quantity"
              name="quantity"
            />
          </div>
          <div className="productForm__input-wrap">
            {/* <label className="productForm__label" htmlFor="status">
              STATUS:
            </label>
            <label className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-switch-input"
                name="toggle"
                //have to figure this out.
              />
              <span className="toggle-switch-slider"></span>
            </label> */}
          </div>
          <div className="productForm__input-wrap">
            <label className="productForm__label" htmlFor="description">
              ITEM DESCRIPTION:
            </label>
            <textarea
              type="text"
              className="productForm__field productForm__field--description"
              placeholder="(Optional)"
              name="description"
            ></textarea>
          </div>
          <button type="submit" className="productForm__btn">
            SAVE
          </button>
          <Link to="/inventory">
            <button type="" className="productForm__btn">
              CANCEL
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default CreateNewProduct;
