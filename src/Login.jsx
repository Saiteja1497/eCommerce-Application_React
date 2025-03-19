import React, { Component } from "react";
//import history from "./history";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "sai@test.com", password: "sai@123", message: "" };
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h4 className="my1 py2 border-bottom">Login</h4>
          {/* Email Starts */}
          <div className="form-group form-row">
            <label className="col-lg-4">Email:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            />
          </div>
          {/* Email Ends */}
          {/* Password Starts */}
          <div className="form-group form-row">
            <label className="col-lg-4">Password:</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
            />
          </div>
          <div className="text-right">
            {this.state.message}
            <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
              Login
            </button>
          </div>
          {/* Password Ends */}
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.title = "Login - eCommerce";
  }

  //   onLoginClick =  () => {
  //     console.log(this.state);
  //     if (
  //       this.state.email === "sai@gmail.com" &&
  //       this.state.password === "sai123"
  //     ) {
  //       this.setState({
  //         message: <span className="text-success"> Successfully logged-in</span>,
  //       });
  //     } else {
  //       this.setState({
  //         message: (
  //           <span className="text-danger">
  //             Invalid Credentials, Please try again
  //           </span>
  //         ),
  //       });
  //     }
  //   };

  onLoginClick = async () => {
    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );
    var body = await response.json();
    if (body.length > 0) {
      this.setState({
        message: <span className="text-success"> Successfully logged-in</span>,
      });
      this.props.updateIsLoggedInStatus(true);

      this.props.history.replace("/dashboard");
    } else {
      this.setState({
        message: (
          <span className="text-danger">
            Invalid Credentials, Please try again
          </span>
        ),
      });
    }
  };
}
