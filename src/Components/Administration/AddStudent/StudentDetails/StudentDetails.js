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
import Checkbox from '@material-ui/core/Checkbox';

 
  
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
                 <InputLabel htmlFor="gender">Gender</InputLabel>
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
              <h1> Previous School Attended </h1>
              <p>
              <TextField
                label="Name of School"
                placeholder="Name of School"
                className='textField'
                onChange={''}
              />
              </p>
              <p>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="Date Of Addmission"
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
                label="Age on Addmission"
                placeholder="Age on Addmission"
                className='textField'
                onChange={''}
              />
              </p>
              <p>
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="Last attended date"
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
                label="Age on last attended"
                placeholder="Age on last attended"
                className='textField'
                onChange={''}
              />
              </p>
              <h1> Health Details </h1>

                <p>
                  <p>Please tick disease agianse which the child has been vaccinated</p>
                  <Checkbox value="smallpox"/>Smallpox
                  <Checkbox value="diphteria"/>Diphteria
                  <Checkbox value="whooping Couh"/>Whooping Cough
                  <Checkbox value="tetanu"/>Tetanus
                  <Checkbox value="measles"/>Measles
                  <Checkbox value="polio"/>Polio
                </p> 
                <p>
                 <TextField
                    label="Any other health related issue?"
                    placeholder="any other health related issue"
                    className='textField'
                    onChange={''}
                  />
                </p>
                <p>
                 <TextField
                    label="Incase of sudden illness at school please indicate what show be done?"
                    placeholder="emergency health action"
                    className='textField'
                    onChange={''}
                  />
                </p>              
              <h1> Other Significant Details </h1>
                <p> 
                 <InputLabel htmlFor="child_is_living_with">Child is living with </InputLabel>
                    <Select>
                    <MenuItem value="both parent">Both Parents</MenuItem>
                    <MenuItem value="mother">Mother</MenuItem>
                    <MenuItem value="father">Father</MenuItem>
                    <MenuItem value="guardian">Guardian</MenuItem>
                    <MenuItem value="other person">Other Person</MenuItem>
                </Select>
              </p>
              <p>
              <TextField
                label="Number of other children living in the home. (Young)"
                placeholder="Young"
                className='textField'
                onChange={''}
              />
              </p>
              <p>
              <TextField
                label="Number of other children living in the home. (Old)"
                placeholder="Old"
                className='textField'
                onChange={''}
              />
              </p>
              <h1> Person Responsible for picking up child </h1>
                <p>
                  <TextField
                    label="Full Name"
                    placeholder="Full Name"
                    className='textField'
                    onChange={''}
                  />
                </p>
                <p>
                  <TextField
                    label="Contact No."
                    placeholder="Contact No"
                    className='textField'
                    onChange={''}
                  />
                </p>
                <p>
                  <TextField
                    label="Relation to child"
                    placeholder="Relation to child"
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
   

