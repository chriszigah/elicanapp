import React, { Component } from "react";
import "./Register.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signin from "../SignIn/SignIn";
import { Alert } from "reactstrap";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      alertVisible: false
    };
  }

  handleOnAlertDismiss = () => {
    this.setState({ alertVisible: false });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state.formErrors)) {
      fetch("http://localhost:7000/users/signup", {
        method: "post",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          firstname: this.state.firstName,
          lastname: this.state.lastName,
          password: this.state.password,
          email: this.state.email,
          joined: new Date()
        })
      })
        .then(response => response.json())
        .then(user => {
          if (user) {
            alert("Your registration is successfuly, Please Login");
            this.props.redirectToSigin();
          }
        });
    }
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const inputsReady =
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.password; // changed when state has changed, empty string will return false in JS
    const { formErrors } = this.state;
    const alertErrors = formErrors;

    console.log(alertErrors);
    return (
      <div>
        <Alert
          color="danger"
          isOpen={this.state.alertVisible}
          toggle={this.handleOnAlertDismiss}
          className="alert"
        >
          <div></div>
          Please, identify and fix the error(s) on the form.
        </Alert>
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className={formErrors.firstName.length > 0 ? "error" : null}
                  placeholder="First Name"
                  name="firstName"
                  onChange={this.handleChange}
                  noValidate
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className={formErrors.lastName.length > 0 ? "error" : null}
                  placeholder="Last Name"
                  name="lastName"
                  onChange={this.handleChange}
                  noValidate
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                  noValidate
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  noValidate
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit" disabled={!inputsReady}>
                  Create Account
                </button>
                <small>Already Have an Account?</small>
                <p>
                  <Link to="/signin" className="f6 link dim black db pointer">
                    Sign In{" "}
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <Router>
            <Route path="/signin" component={Signin} />
          </Router>
        </div>
      </div>
    );
  }
}

export default Register;
