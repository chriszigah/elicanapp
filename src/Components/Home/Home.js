import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './Home.css'

const Home = ({ user }) => {
    return (  
      <div>
          <h1>Welcome !</h1>
          <h1>{`Username : ${user.firstname} | Email : ${user.email}`}</h1>
          <hr/>
          <div className='home_navs'>
          <Link to='/administration'><button className="btn"><FontAwesome size="2x" name="bars" /> <h3>Administration</h3></button></Link>
          <Link to='#'><button className="btn"><FontAwesome  size="2x" name="graduation-cap" /><h3>Academics</h3></button></Link>
          <Link to='#'><button className="btn"><FontAwesome size="2x" name="credit-card" /><h3>Accounts</h3></button></Link>
        </div>
      </div>
    );
  }

export default Home;
