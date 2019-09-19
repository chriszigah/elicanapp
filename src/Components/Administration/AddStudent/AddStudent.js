
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './AddStudent.css'

//Student Components
import UploadImage from './UploadImage/UploadImage';
import StudentDetails from './StudentDetails/StudentDetails';  

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach( val => {
    val.length > 0 && (valid = false)
  });

  
  return valid;
};


export class AddStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
        activeStep: 0,
        setActiveStep: 0,
        studentdetails: {
          firstname: '',
          middlename: '',
          surname:'',
          gender:'',
          date_of_birth:'',
          place_of_birth:'',
          mother_tongue:'',
          religion:'',
          religious_denomination:'',
          hometown: '',
          hometown_region:'',
          language_spoken:'',
          pricture:''
        },
        formErrors: {
         firstname: '',
         middlename: '',
         surname:'',
         gender:'',
         date_of_birth:'',
         place_of_birth:'',
         mother_tongue:'',
         religion:'',
         religious_denomination:'',
         hometown: '',
         hometown_region:'',
         language_spoken:'',
         pricture:''
        } 
    }
  }

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    
    let { formErrors } = this.state;

    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 3 
        ? "minimum 3 characters required" 
        : ""; 
        break;
      case 'lastName':
        formErrors.lastName = 
        value.length < 3 
        ? "minimum 3 characters required"
        : ""
        break;
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

  handleSubmit = e => {
    e.preventDefault();

    if(formValid(this.state.formErrors)) {
		fetch('http://localhost:7000/users/signup', {
			method: 'post',
			headers: {'content-Type': 'application/json'},
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
					//console.log(user)
	
					this.props.onRouteChange('signin');
				}
			})
	} else {
		console.log('Errro Submitting Form')
	}	
  }
  
  getSteps = () => {
    return ['Upload Image', 'Student Details', 'Health Details', 'Parent Details', 'Other Significant Details', 'Confirm'];
  }
  
  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
          return <UploadImage />
      case 1:
        return <StudentDetails 
                  studentDetails={this.state.studentdetails} 
                  handleChange={this.handleChange} 
                  handleSubmit={this.handleSubmit} 
                  formErrors={this.state.formErrors}
                />
      case 2:
        return 'Health Details';
      case 3:
          return 'Parent Details';
      case 4:
          return 'Other Significan Details';
      case 5:
            return 'Confirm';
      default:
        return 'Uknown stepIndex';
    }
  } 

  handleNext = () => {
    return this.setState({ activeStep : this.state.activeStep + 1 });
  }

  handleBack = () => {
    return this.setState({ activeStep : this.state.activeStep - 1 });
  }

  handleReset = () => {
    this.state.setActiveStep(0);
  }

 
  render() {
    const steps = this.getSteps();
    return (
      <div className={useStyles.root}>
      <Stepper activeStep={this.state.activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {this.state.activeStep === steps.length ? (
          <div>
            <Typography className={useStyles.instructions}>All steps completed</Typography>
            <Button onClick={this.handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={useStyles.instructions}>{this.getStepContent(this.state.activeStep)}</div>
            <div>
              <Button
                disabled={this.state.activeStep === 0}
                onClick={this.handleBack}
                className={useStyles.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={this.handleNext}>
                {this.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    );
  }
}

export default AddStudent;
