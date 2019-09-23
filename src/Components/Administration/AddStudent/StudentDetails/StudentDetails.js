import React from 'react';
import './StudentDetails.css';


  
  export default class StudentDetails extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

      }
    }
  
    render() {
      console.log(this.props)
      const { handleSubmit, formErrors, handleChange } = this.props;
      return (
         <div className="formwrapper">
        <h1>Student Details </h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
                <input 
                  type="text" 
                  className={formErrors.firstName.length > 0 ? "error" : null } 
                  placeholder="First Name" 
                  name="firstName" 
                  onChange={handleChange} 
                  noValidate
                />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
            </div>
            <div className="middlename">
              <label htmlFor="middleName">Middle Name</label>
                <input 
                  type="text" 
                  className={formErrors.middleName.length > 0 ? "error" : null } 
                  placeholder="Middle Name" 
                  name="middleName" 
                  onChange={handleChange} 
                  noValidate
                />
                {formErrors.middleName.length > 0 && (
                  <span className="errorMessage">{formErrors.middleName}</span>
                )}
            </div>
            <div className="lastname">
              <label htmlFor="lastName">Last Name</label>
                <input 
                  type="text" 
                  className={formErrors.lastName.length > 0 ? "error" : null } 
                  placeholder="Middle Name" 
                  name="middleName" 
                  onChange={handleChange} 
                  noValidate
                />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
            </div>
            
          </form>
      </div>
      );
    }
  }
   

