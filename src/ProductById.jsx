import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class ProductById extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card m-2">
            <div className="card-body">
              <div className="text-muted">
                {" "}
                #{this.state.product.id}
                <span
                  className="pull-right"
                  onClick={() => {
                    this.props.onDelete(this.state.product);
                  }}
                >
                  <i className="fa fa-times hand-icon"></i>
                </span>
              </div>

              <h5 className="pt-5 border-top">
                {this.state.product.productName}
              </h5>
              <div>${this.state.product.price}</div>
            </div>
            <div className="card-footer">
              <div className="float-left">
                <span className="badge">{this.state.product.quantity}</span>
                <div className="btn-group">
                  <div
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onIncrement(this.state.product, 10);
                    }}
                  >
                    +
                  </div>
                  <div
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onDecrement(this.state.product, 0);
                    }}
                  >
                    -
                  </div>
                </div>
              </div>

              <div className="float-right">
                <Link to="/cart" className="btn btn-secondary">
                  Back...
                </Link>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = async () => {
    document.title = `${this.state.product.productName} - eCommerce`;
    //console.log(this.props.match.params.id);
    var id = this.props.match.params.id;
    var response = await fetch(`http://localhost:5000/products/${id}`, {
      method: "GET",
    });
    var body = await response.json();
    console.log(body);
    if (body) {
      this.setState({ product: body });
    }
  };
}
