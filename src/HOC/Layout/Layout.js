import React, { Component } from 'react';
import './Layout.css'
import Header from '../../Components/AppBar/AppBar';
import Footer from '../../Components/Footer/Footer'
import '../../App.css'


class Layout extends Component {
   render() {
    return (
      <div className="App">
        <Header isSignedIn={this.props.isSignedIn} handleSignIn={this.props.handleSignIn}/>
           {this.props.children}
        <Footer/>
      </div> 
    );
  }
}


export default Layout;
