import React, { Component } from "react";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fullName: "",
      dateOfBirth: "",
      gender: "",
      country: "",
      receiveNewsLetters: false,
      controls: [
        "email",
        "password",
        "fullName",
        "dateOfBirth",
        "gender",
        "country",
        "receiveNewsLetters",
      ],
      errors: {
        email: [],
        password: [],
        fullName: [],
        dateOfBirth: [],
        gender: [],
        country: [],
        receiveNewsLetters: [],
      },
      message: "",
      dirty: {
        email: false,
        password: false,
        fullName: false,
        dateOfBirth: false,
        gender: false,
        country: false,
        receiveNewsLetters: false,
      },
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h1>Register</h1>
          <form>
            <div className="form-group form row">
              <label className="col-lg-4 col-form-label" htmlFor="email">
                Email
              </label>
              <div className="col-lg-8 ">
                <input
                  type="text"
                  id="email"
                  autoFocus="autofocus"
                  className="form-control"
                  value={this.state.email}
                  onChange={(event) => {
                    let dirty = this.state.dirty;
                    dirty.email = true;
                    this.setState(
                      { email: event.target.value, dirty: dirty },
                      this.validate
                    );
                  }}
                  onBlur={(event) => {
                    let dirty = this.state.dirty;
                    dirty.email = true;
                    this.setState({ dirty: dirty }, this.validate);
                  }}
                ></input>

                <div className="text-danger">
                  {this.state.errors.email[0] && this.state.dirty.email
                    ? this.state.errors.email
                    : ""}
                </div>
              </div>
            </div>

            <div className="form-group form row">
              <label className="col-lg-4 col-form-label" htmlFor="password">
                Password
              </label>
              <div className="col-lg-8 ">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={(event) => {
                    let dirty = this.state.dirty;
                    dirty.password = true;
                    this.setState(
                      { password: event.target.value, dirty: dirty },
                      this.validate
                    );
                  }}
                  onBlur={(event) => {
                    let dirty = this.state.dirty;
                    dirty.password = true;
                    this.setState({ dirty: dirty }, this.validate);
                  }}
                ></input>

                <div className="text-danger">
                  {this.state.errors.password[0] && this.state.dirty.password
                    ? this.state.errors.password
                    : ""}
                </div>
              </div>
            </div>

            <div className="form-group form row">
              <label className="col-lg-4 col-form-label" htmlFor="fullName">
                Full Name
              </label>
              <div className="col-lg-8 ">
                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  value={this.state.fullName}
                  onChange={(event) => {
                    let dirty = this.state.dirty;
                    dirty.fullName = true;
                    this.setState(
                      { fullName: event.target.value, dirty: dirty },
                      this.validate
                    );
                  }}
                  onBlur={(event) => {
                    let dirty = this.state.dirty;
                    dirty.fullName = true;
                    this.setState({ dirty: dirty }, this.validate);
                  }}
                ></input>
                <div className="text-danger">
                  {this.state.errors.fullName[0] && this.state.dirty.fullName
                    ? this.state.errors.fullName
                    : ""}
                </div>
              </div>
            </div>

            <div className="form-group form row">
              <label className="col-lg-4 col-form-label" htmlFor="dateOfBirth">
                Date Of Birth
              </label>
              <div className="col-lg-8 ">
                <input
                  type="date"
                  id="dateOfBirth"
                  className="form-control"
                  value={this.state.dateOfBirth}
                  onChange={(event) => {
                    let dirty = this.state.dirty;
                    dirty.dateOfBirth = true;
                    this.setState(
                      { dateOfBirth: event.target.value, dirty: dirty },
                      this.validate
                    );
                  }}
                  onBlur={(event) => {
                    let dirty = this.state.dirty;
                    dirty.dateOfBirth = true;
                    this.setState({ dirty: dirty }, this.validate);
                  }}
                ></input>

                <div className="text-danger">
                  {this.state.errors.dateOfBirth[0] &&
                  this.state.dirty.dateOfBirth
                    ? this.state.errors.dateOfBirth
                    : ""}
                </div>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-lg-4">Gender</label>
              <div className="col-lg-8">
                <div className="form-check">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    className="form-check-input"
                    value="male"
                    checked={this.state.gender === "male" ? true : false}
                    onChange={(event) => {
                      let dirty = this.state.dirty;
                      dirty.gender = true;
                      this.setState(
                        {
                          gender: event.target.value,
                          dirty: dirty,
                        },
                        this.validate
                      );
                    }}
                    onBlur={(event) => {
                      let dirty = this.state.dirty;
                      dirty.gender = true;
                      this.setState({ dirty: dirty });
                    }}
                  ></input>
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    className="form-check-input"
                    value="female"
                    checked={this.state.gender === "female" ? true : false}
                    onChange={(event) => {
                      let dirty = this.state.dirty;
                      dirty.gender = true;
                      this.setState(
                        {
                          gender: event.target.value,
                          dirty: dirty,
                        },
                        this.validate
                      );
                    }}
                    onBlur={(event) => {
                      let dirty = this.state.dirty;
                      dirty.gender = true;
                      this.setState({ dirty: dirty });
                    }}
                  ></input>
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="text-danger">
                  {this.state.errors.gender[0] && this.state.dirty.gender
                    ? this.state.errors.gender
                    : ""}
                </div>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-lg-4 col-form-label" htmlFor="country">
                Country
              </label>
              <div className="col-lg-8">
                <select
                  className="form-control"
                  value={this.state.country}
                  onChange={(event) => {
                    let dirty = this.state.dirty;
                    dirty.country = true;
                    this.setState(
                      {
                        country: event.target.value,
                        dirty: dirty,
                      },
                      this.validate
                    );
                  }}
                  onBlur={(event) => {
                    let dirty = this.state.dirty;
                    dirty.country = true;
                    this.setState({
                      dirty: dirty,
                    });
                  }}
                >
                  <option value="">Please Select</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Germany">Germany</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Ireland">IreLand</option>
                </select>

                <div className="text-danger">
                  {this.state.errors.country[0] && this.state.dirty.country
                    ? this.state.errors.country
                    : ""}
                </div>
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-lg-4 col-form-label"></label>
              <div className="col-lg-8">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="true"
                    checked={this.state.receiveNewsLetters}
                    onChange={(event) => {
                      let dirty = this.state.dirty;
                      dirty.receiveNewsLetters = true;
                      this.setState(
                        {
                          receiveNewsLetters: event.target.checked,
                          dirty: dirty,
                        },
                        this.validate
                      );
                    }}
                    onBlur={(event) => {
                      let dirty = this.state.dirty;
                      dirty.receiveNewsLetters = true;
                      this.setState({ dirty: dirty });
                    }}
                    id="receivenewsletters"
                  ></input>
                  <label
                    className="form-check-label"
                    htmlFor="receivenewsletters"
                  >
                    Receive News Letters
                  </label>
                  <div className="text-danger">
                    {this.state.errors.receiveNewsLetters[0] &&
                    this.state.dirty.receiveNewsLetters
                      ? this.state.errors.receiveNewsLetters
                      : ""}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="text-right">{this.state.message}</div>
                <div className="text-right">
                  <button
                    className="btn btn-success m2"
                    onClick={this.onRegisterClick}
                  >
                    Register
                  </button>
                </div>
                <ul className="text-danger">
                  {Object.keys(this.state.errors).map((control) => {
                    if (this.state.dirty[control]) {
                      return this.state.errors[control].map((err) => {
                        return <li key={err}>{err}</li>;
                      });
                    } else {
                      return "";
                    }
                  })}
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  validate = () => {
    let validEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let validPasswordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;
    let errors = {};
    this.state.controls.forEach((control) => {
      errors[control] = [];
      switch (control) {
        case "email":
          if (!this.state[control]) {
            errors[control].push("Email can't be blank");
          }
          if (this.state.email) {
            if (!validEmailRegex.test(this.state[control])) {
              errors[control].push(
                "Email address is invalid, Please enter Valid Email!!"
              );
            }
          }
          break;

        case "password":
          if (!this.state[control]) {
            errors[control].push("Password can't be blank");
          }
          if (this.state.password) {
            if (!validPasswordRegex.test(this.state[control])) {
              errors[control].push(
                "Please Enter Valid Password (atleast: 1 - uppercase, 1- lowercase, 1 - Number, 1-Special char)!!"
              );
            }
          }
          break;

        case "fullName":
          if (!this.state[control]) {
            errors[control].push("Full Name can't be blank");
          }
          break;

        case "dateOfBirth":
          if (!this.state[control]) {
            errors[control].push("Date Of Birth can't be blank");
          }
          if (this.state[control]) {
            let dob = new Date(this.state[control]).getTime();
            let today = new Date().getTime();

            if (today - 1000 * 60 * 60 * 24 * 365.25 * 18 < dob) {
              errors[control].push("Minimum Age is 18 Years");
            }
          }
          break;

        case "gender":
          if (!this.state[control]) {
            errors[control].push("Gender can't be blank");
          }
          break;

        case "country":
          if (!this.state[control]) {
            errors[control].push("Country can't be blank");
          }
          break;

        default:
          break;
      }
    });

    this.setState({ errors });
  };

  componentDidMount = async () => {
    document.title = "Registration - eCommerce";
  };
  isValid = () => {
    let valid = true;
    for (let control in this.state.errors) {
      if (this.state.errors[control].length > 0) {
        valid = false;
      }
    }

    return valid;
  };
  onRegisterClick = async () => {
    var dirty = this.state.dirty;
    Object.keys(dirty).forEach((control) => {
      dirty[control] = true;
    });
    this.setState({ dirty: dirty });

    this.validate();
    if (this.isValid()) {
      let user = {
        email: this.state.email,
        password: this.state.password,
        dateOfBirth: this.state.dateOfBirth,
        fullName: this.state.fullName,
        country: this.state.country,
        receiveNewsLetters: this.state.receiveNewsLetters,
        gender: this.state.gender,
      };
      let response = await fetch("http://localhost:5000/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json" },
      });

      var body = await response.json();
      if (response.ok) {
        this.setState({
          message: (
            <span className="text-success"> Successfully Registered</span>
          ),
        });
        //this.props.history.replace("/login");
      } else {
        console.log(response, body);
        this.setState({
          message: <span className="text-danger">Error in Registration</span>,
        });
      }
    } else {
      this.setState({ message: "Invalid" });
    }
  };
}

export default Registration;
