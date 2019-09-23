import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

//Compnents
//import Home from './Components/Home/Home'
import Layout from './HOC/Layout/Layout';

//import Logo from './components/Logo/Logo';  
import Signin from './Components/SignIn/SignIn';  
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Administration from './Components/Administration/Administration';
import AddStudent from './Components/Administration/AddStudent/AddStudent'         

  class App extends Component { 
  constructor (){ 
    super();
    this.state = {
      user: {
        id: '',
        firstname: '',
        lastname:'',
        passowrd:'',
        email: '',
        entries: 0,
        joined: '',
        message: '',
        token: ''
      },
      isSignedIn : true,
      
    }
  } // End of Constructor

  handleSignIn = ()=> {
    this.setState({
      isSignedIn : !this.state.isSignedIn
    })
  }

  redirectToHome =() => {
    return <Redirect to="/"/>
  }

  redirectToSign =() => {
    return <Redirect to="/Signin"/>
  }
  
  loadUser = (user) => {
    this.setState({user: {
       id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        joined: user.joined,
        token: user.token,
        message: user.message
    }})
  }

  onInputChange = (event) => {
    this.setState( {input: event.target.value});
  }
  render() {
    return (
      <div className="App">
      <Layout isSignedIn={this.state.isSignedIn} handleSignIn={this.handleSignIn}>
        <Switch>
            <Route exact path="/" render={() => (
              this.state.isSignedIn ? (
                <Redirect to="/home"/>
                  ) : (
                  <Redirect to="/signin"  />
                )
            )}/>

            <Route path="/home" render={()=>(
              this.state.isSignedIn ? (
                <Home user={this.state.user}/>
                ) : (
                <Redirect to="/"/>
              )
            )}/>

            <Route path="/register" render={()=>(
              this.state.isSignedIn ? (
                <Redirect to="/home"/>
                ) : (
                <Register redirectToSign={this.redirectToSign()}/>
              )
            )}/>

            <Route path="/signin" render={()=>(
              this.state.isSignedIn ? (
                <Redirect to="/home"/>
                ) : (
                <Signin 
                  loadUser={this.loadUser} 
                  handleSignIn={this.handleSignIn} 
                  redirectToHome={this.redirectToHome} 
                  user={this.state.user}/>
                )
            )}/>

            <Route path="/administration" render={()=>(
              this.state.isSignedIn ? (
                <Administration />
                ) : (
                  <Redirect to="/signin"  />
                )
              )}
            />

            <Route path="/addstudent" render={()=>(
              this.state.isSignedIn ? (
                <AddStudent />
                ) : (
                  <Redirect to="/signin"  />
                )
              )}
            />
        </Switch>
    </Layout>
      </div>
    )
  }
}

export default App
