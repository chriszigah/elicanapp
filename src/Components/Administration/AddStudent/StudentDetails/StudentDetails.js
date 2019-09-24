import React from 'react';
import './StudentDetails.css';
//import clsx from 'clsx';
//import { makeStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

 
  
  export default class StudentDetails extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        dateOfBirth: null

      }
    }

     handleDateChange = date => {
          this.setState({
              dateOfBirth: date
          })
      };
  
    render() {
      console.log(this.props)
      //const { handleSubmit, formErrors, handleChange } = this.props;
      return (
         <div>
         <h1> Enter Student Details </h1>
          <form className="formwrapper" noValidate autoComplete="off">
            <Grid container justify="space-between" alignItems="flex-start" >
              <TextField
                label="First Name"
                placeholder="First Name"
                className='textField'
                onChange={''}
                shrink={false}
              />
               <TextField
                label="Middle Name"
                placeholder="Middle Name"
                className='textField'
                onChange={''}
              />
              <TextField
                label="Surname"
                data-shrink={false}
                placeholder="Surname"
                className='textField'
                onChange={''}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="Date Of Birth"
                  format="dd/MM/yyyy"
                  value={this.state.dateOfBirth}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            </form>
          </div>
      );
    }
  }
   

