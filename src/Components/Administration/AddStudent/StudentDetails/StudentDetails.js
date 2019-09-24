import React from 'react';
import './StudentDetails.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
              <p>
              <TextField
                label="First Name"
                placeholder="First Name"
                className='textField'
                onChange={''}
              />
              </p>
              <p>
               <TextField
                label="Middle Name"
                placeholder="Middle Name"
                className='textField'
                onChange={''}
              />
              </p>
              <p>
              <TextField
                label="Surname"
                data-shrink={false}
                placeholder="Surname"
                className='textField'
                onChange={''}
              />
              </p>
              <p> 
                 <InputLabel htmlFor="age-helper">Gender</InputLabel>
                    <Select>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                </Select>
              </p>
              <br/>
              <p>
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
              </p>
              <p>
              <TextField
                label="Place of Birth"
                placeholder="Place of Birth"
                className='textField'
                onChange={''}
              />
              </p>
              <p>
              <TextField
                label="Mother Tongue"
                placeholder="Mother Tongue"
                className='textField'
                onChange={''}
              />
              </p>
              <p>
              <TextField
                label="Religion"
                placeholder="Religion"
                className='textField'
                onChange={''}
              />
              </p>
              <p>
              <TextField
                label="Religious Denomination"
                placeholder="Religious Denomination"
                className='textField'
                onChange={''}
              />
              </p>
              <p>
              <TextField
                label="Language Spoken"
                placeholder="Language Spoken"
                className='textField'
                onChange={''}
              />
              </p>
            </Grid>
            </form>
          </div>
      );
    }
  }
   

