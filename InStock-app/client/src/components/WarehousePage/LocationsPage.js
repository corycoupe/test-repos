import React from "react";
import { Link } from "react-router-dom";
function LocationsPage({locations}) {
  return (
    <>
      <section className="locations">
        <header className="locations__header">
          <h1 className="locations__header-title">Locations</h1>
          <input
            type="text"
            className="locations__header-search"
            placeholder="Search"
          ></input>
        </header>
        <section className="locations__body">
        <div className="locations__desktop">
        <h2 className="locations__desktop-head">Warehouse</h2>
        <h2 className="locations__desktop-head">Contact</h2>
        <h2 className="locations__desktop-head">Contact Information</h2>
        <h2 className="locations__desktop-head">Categories</h2>
        </div>  
        {locations.map((warehouse) => (
        <div className="locations__warehouse">
        <div className="locations__warehouse-title">
        <Link to="/locations/:id"> 
        <h3 className="locations__warehouse-title--name">Warehouse {warehouse.warehouseId}</h3>
        </Link>
        {/* warehouse address doesnt work... for no reasonable excuse */}
        <p className="locations__warehouse-title--address">{warehouse.address} {warehouse.location}</p>
        </div>
        <div className="locations__warehouse-contact"> 
        <p className="locations__warehouse-contact--name">{warehouse.contactName}</p>
        <p className="locations__warehouse-contact--position">{warehouse.contactRole}</p>
        </div>
        <div className="locations__warehouse-information"> 
        <p className="locations__warehouse-information--phone">{warehouse.contactNumber}</p>
        <p className="locations__warehouse-information--email">{warehouse.contactEmail}</p>
        </div>
        <div className="locations__warehouse-category"> 
        <p className="locations__warehouse-category--info">Lorem Ipsum Ripsum dipsum</p>
        </div>
        <div className="locations__icon">
        </div>    
        </div>
        ))}  
        </section>   
       </section>
    </>
  );
}
export default LocationsPage;
