import React, { Component } from 'react';
import './StudentDetails.css'



class StudentDetails extends Component {
  
  render(){

       // changed when state has changed, empty string will return false in JS
       const inputsReady = this.props.studentDetails.firstName  
       const { formErrors } = this.props;
       console.log(this.props)
    return (
      <div>
        <div className="wrapper">
          <div className="form-wrapper">
             <h1>Create Account</h1>
                <form onSubmit={this.props.handleSubmit} noValidate>
                    <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    // className={formErrors.firstName.length > 0 ? "error" : null } 
                    placeholder="First Name" 
                    name="firstName" 
                    onChange={this.props.handleChange} 
                    noValidate
                  />
                  {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
              )}
                </div>
                  <div className="createAccount">
                    <button 
                      type="submit"
                      disabled ={!inputsReady}
                      >
                      Create Account
                      </button>
                  </div> 
              </form>
            </div>
            </div>
          </div>
    )
    }
  }
export default StudentDetails;

