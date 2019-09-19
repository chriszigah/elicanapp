import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

export class Administration extends Component {
  render() {
    return (
        <div>
          <div className='home_navs'>
          <Link to='/addstudent'><button className="btn"><FontAwesome size="2x" name="user-plus" /> <h3>Add a Student</h3></button></Link>
          <Link to='#'><button className="btn"><FontAwesome  size="2x" name="user-circle" /><h3>Add a Staff</h3></button></Link>
          <Link to='#'><button className="btn"><FontAwesome size="2x" name="search" />   <h3>Search</h3></button></Link>
        </div>
      </div>
    );
  }
}

export default Administration;
