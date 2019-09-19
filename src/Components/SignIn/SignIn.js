import React, { Component } from 'react';
import './SignIn.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from '../Register/Register';



const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach( val => {
    val.length > 0 && (valid = false)
  });
 
  return valid;
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email:"",
        password: "",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if(formValid(this.state.formErrors)) {
      fetch('http://localhost:7000/users/login', {
        method: 'post',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }) 
      })
        .then(response => response.json())
        .then(user => {
              if(user.id){
                this.props.loadUser(user);
                this.props.setState({ isSignedIn: true})
          }
        })
    } else {
      alert('Incorrect Username/Password')
    }
   
  }

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
        case 'email':
            formErrors.email = 
            emailRegex.test(value)
            ? ""
            : "Invalid email address"
            break;
        case 'password':
            formErrors.password = 
            value.length < 6 
            ? "minimum 6 characters required"
            : ""
            break;
        default:
          break;
    }

    this.setState({ formErrors, [name]: value })
  }

  render(){
    const { formErrors } = this.state;
    const inputsReady =  this.state.email && this.state.password  // changed when state has changed, empty string will return false in JS

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="email">
            <label htmlFor="email">Email</label>
              <input 
                type="email" 
                className={formErrors.email.length > 0 ? "error" : null } 
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
              className={formErrors.password.length > 0 ? "error" : null } 
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
            <button 
              type="submit"
              disabled ={!inputsReady}
              >
              Sign In
              </button>
              <small>Not yet Registered?</small>
              <p>
                  <Link 
                  to="/register" 
                  className="f6 link dim black db pointer"
                  >Create an Accout </Link>
              </p>
          </div>
        </form>
      </div>
      <Router>
        <Route path="/register" component={Register}/>
      </Router>
    </div>
  );
}
}

export default SignIn
