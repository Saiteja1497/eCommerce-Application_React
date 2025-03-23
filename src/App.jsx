import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";

import NavBar from "./NavBar";
import CustomerList from "./CustomerList";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NoMatchPage from "./NoMatchPage";
//import history from "./history";
import SideBar from "./SideBar";
import ProductById from "./ProductById";
import NewCustomer from "./InsertCustomer";
import UpdateCustomer from "./UpdateCustomer";
import Registration from "./Registration";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return (
      //   <BrowseRouter history={history}>
      <HashRouter>
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          updateIsLoggedInStatus={this.updateIsLoggedInStatus}
        />
        {/* <CustomerList></CustomerList> */}
        {/* <ShoppingCart></ShoppingCart> */}
        {/* <Login></Login> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              {this.state.isLoggedIn ? <SideBar></SideBar> : ""}
            </div>
            <div className="col-lg-9">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Login
                      {...props}
                      updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                    />
                  )}
                />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/customers" exact component={CustomerList} />
                <Route path="/cart" exact component={ShoppingCart} />
                <Route path="/product/:id" component={ProductById} />
                <Route path="/new-customer" exact component={NewCustomer} />
                <Route
                  path="/edit-customer/:id"
                  exact
                  component={UpdateCustomer}
                />
                <Route path="/register" exact component={Registration} />
                <Route path="*" component={NoMatchPage} />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }

  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status });
  };
}
// render={(props) => {
//     <Login {...props} updateIsLoggedIn={this.updateIsLoggedIn} />;
// }}
//"font": "^0.0.4",
