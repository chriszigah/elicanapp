import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

export class Administration extends Component {
  render() {
    return (
        <div>
        <h1>Welcome !</h1>
          <h4>Hello Chris, Ayeeee kooooo</h4>
          <hr/>
          <div className='home_navs'>
            <button className="btn"><Link to='/addstudent'><FontAwesome size="2x" name="user-plus" /> <h3>Add a Student</h3></Link></button>
            <button className="btn"><Link to='/addstaff'><FontAwesome  size="2x" name="user-circle" /><h3>Add a Staff</h3></Link></button>
            <button className="btn"><Link to='/search'><FontAwesome size="2x" name="search" />   <h3>Search</h3></Link></button>
        </div>
      </div>
    );
  }
}

export default Administration;
