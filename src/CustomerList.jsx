import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "Customers",
      customerCount: "",
      customers: [],
    };
  }

  customerNameStyles = (custName) => {
    if (custName.startsWith("s")) return "green-highlight";
    else if (custName.startsWith("t")) return "red-highlight";
    else return "";
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span>{this.state.customerCount}</span>
          <Link to="/new-customer" className="btn btn-primary ">
            New Customer
          </Link>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  componentDidMount = async () => {
    document.title = "Customers - eCommerce";

    var response = await fetch("http://localhost:5000/customers", {
      method: "GET",
    });
    if (response.ok) {
      var body = await response.json();
      this.setState({ customers: body, customerCount: body.length });
    } else {
      console.log("Error: " + response.status);
    }
  };
  // onRefreshClick = () => {
  //   this.setState({
  //     cutomerCount: 7,
  //   });
  // };

  getPhoneToRender = (phone) => {
    // return phone ? (phone) : (
    //     <div className="bg-warning p-2 text-center">No Phone</div>);
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => {
                this.onChangePictureClick(cust, index);
              }}
            >
              Change Photo
            </button>
          </td>
          {/* <td className={this.customerNameStyles(cust.name)}>{cust.name}</td> */}
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
          <td>
            <Link to={`/edit-customer/${cust.id}`} className="btn btn-info">
              Edit
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.onDeleteClick(cust.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/1020/60";
    this.setState({ customers: custArr });
  };

  onDeleteClick = async (id) => {
    if (window.confirm("Are you sure to delete this customer?")) {
      var response = await fetch(`http://localhost:5000/customers/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        var allCustomers = [...this.state.customers];
        allCustomers = allCustomers.filter((cust) => {
          return cust.id !== id;
        });
        this.setState({
          customers: allCustomers,
          customerCount: allCustomers.length,
        });
      }
    }
  };
}
