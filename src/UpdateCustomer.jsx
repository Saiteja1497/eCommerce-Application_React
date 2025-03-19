import React, { Component } from "react";

class UpdateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", city: "", phone: "", photo: "" };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <form>
            <h4 className="p-2 border-bottom">Edit Customer</h4>
            <div className="form-group form-row">
              <label className="col-lg-4">Customer Name</label>
              <div className="col-lg-8">
                <input
                  typr="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                ></input>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-lg-4">City</label>
              <div className="col-lg-8">
                <input
                  typr="text"
                  className="form-control"
                  value={this.state.city}
                  onChange={(event) => {
                    this.setState({ city: event.target.value });
                  }}
                ></input>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-lg-4">Phone</label>
              <div className="col-lg-8">
                <input
                  typr="text"
                  className="form-control"
                  value={this.state.phone}
                  onChange={(event) => {
                    this.setState({ phone: event.target.value });
                  }}
                ></input>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-lg-4">Photo</label>
              <div className="col-lg-8">
                <input
                  typr="text"
                  className="form-control"
                  value={this.state.photo}
                  onChange={(event) => {
                    this.setState({ photo: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="border-top p2">
              <button className="btn btn-success" onClick={this.onSaveClick}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    var response = await fetch(`http://localhost:5000/customers/${id}`, {
      method: "GET",
    });
    var body = await response.json();
    this.setState({
      name: body.name,
      phone: body.phone,
      city: body.address.city,
      photo: body.photo,
    });
  };

  onSaveClick = async (event) => {
    let id = this.props.match.params.id;
    event.preventDefault();
    var customer = {
      name: this.state.name,
      address: { city: this.state.city },
      phone: this.state.phone,
      photo: this.state.photo,
    };
    var response = await fetch(`http://localhost:5000/customers/${id}`, {
      method: "PUT",
      body: JSON.stringify(customer),
      headers: { "Content-type": "application/json" },
    });

    var body = await response.json();
    //this.setState({ customer: body });
    if (body) {
      this.props.history.replace("/customers");
    }
  };
}

export default UpdateCustomer;
