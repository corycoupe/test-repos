import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { apiUrl } from "./env/env"; //imports apiUrl
import axios from "axios";
import Header from "./components/Header";
import InventoryPage from "./components/InventoryPage/InventoryPage";
import LocationsPage from "./components/WarehousePage/LocationsPage";
import WareHousePage from "./components/WarehousePage/WarehousePage";
import CreateNewProduct from "./components/CreateNewProduct";
import ProductDetails from "./components/ProductDetails";
import "./styles/main.css";

class App extends Component {
  //state in class component app.js to store data
  state = {
    products: [],
    productDetails: {},
    locations: [],
    warehouseDetail: {},
  };

  //LifeCycle Method: Initial Mounting
  componentDidMount() {
    this.getProductsList();
    this.getLocationsList();
  }
  //LifeCycle Method: Updating
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.products, this.state.products);
  //   if (prevState.products !== this.state.products) this.getProductsList();
  // }

  //Function 1: that calls server and requests data of all products
  getProductsList = () => {
    axios
      .get(`${apiUrl}inventory`)
      .then((response) =>
        this.setState({ products: response.data }, console.log(response.data))
      )
      .catch((err) => console.log(err));
    console.log(this.state); //checking state here.
  };
//function that grabs location list
getLocationsList = () => {
  axios
    .get(`${apiUrl}locations`)
    .then((response) =>
      this.setState({ locations: response.data }, console.log(response.data))
    )
    .catch((err) => console.log(err));
  console.log(this.state); //checking state here.
};
  //Function that posts a new product from the CreateNewProduct page.
  handleUpload = (
    event,
    name,
    lastOrdered,
    warehouseid,
    quantity,
    status,
    description
  ) => {
    event.preventDefault();
    console.log("new product was submited to be posted:");
    axios({
      method: "post",
      url: `${apiUrl}inventory`,
      data: {
        name: name,
        description: description,
        date: lastOrdered,
        warehouseId: warehouseid,
        quantity: quantity,
      },
    })
      .then((response) => {
        this.props.history.push("/inventory");
        console.log("new product post method response", response);
        this.getProductsList();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Function that edits a product detail.

  handleEdit = () => {};
  render() {
    console.log(this.state);
    const { products, locations } = this.state;
    return (
      <>
        <Header />
        <Redirect from="/" to="/inventory" />
        <Switch>
          <Route
            path="/inventory"
            render={(props) => <InventoryPage {...props} products={products} />}
            exact
          />
          <Route
            path="/inventory/:productId"
            render={(props) => (
              <ProductDetails {...props} handleEdit={this.handleEdit} />
            )}
            exact
          />
          <Route
            path="/newProduct"
            render={(props) => (
              <CreateNewProduct {...props} handleUpload={this.handleUpload} />
            )}
          />
          <Route
            path="/locations"
            render={(props) => <LocationsPage {...props} locations={locations} />}
          />
          <Route
            path="/locations/:warehouseID"
            render={(props) => <WareHousePage {...props} />}
          />
        </Switch>
      </>
    );
  }
}
export default withRouter(App);
