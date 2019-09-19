import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './Home.css'

const Home = ({ user }) => {
    return (  
      <div>
          <h1>Welcome !</h1>
          <h4>{`${user.firstname} ${user.lastname}`}</h4>
          <hr/>
          <div className='home_navs'>
            <button className="btn"><Link to='/administration'><FontAwesome size="2x" name="bars" /> <h3>Administration</h3></Link></button>
            <button className="btn"><Link to='/academics'><FontAwesome  size="2x" name="graduation-cap" /><h3>Academics</h3></Link></button>
            <button className="btn"><Link to='/accounts'><FontAwesome size="2x" name="credit-card" />   <h3>Accounts</h3></Link></button>
        </div>
      </div>
    );
  }

export default Home;
