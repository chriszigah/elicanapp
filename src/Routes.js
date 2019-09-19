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
        firstname: 'Chris',
        lastname:'Tiano',
        passowrd:'',
        email: '',
        entries: 0,
        joined: ''
      },
      isSignedIn : true,
      
    }
  } // End of Constructor

  handleSignIn = ()=> {
    this.setState({
      isSignedIn : !this.state.isSignedIn
    })
  }


  
  loadUser = (user) => {
    this.setState({user: {
       id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        joined: user.joined
    }})
    console.log(this.state.user); // this should be remove later 4 security
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
                    <Redirect to="/signin"/>
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
                    this.setState({ isSignedIn : false })
                ) : (
                    <Register/>
                )
                )}/>

                <Route path="/signin" render={()=>(
                this.state.isSignedIn ? (
                    this.setState({ isSignedIn : false })
                ) : (
                    <Signin/>
                )
                )}/>
                <Route path="/administration" exact component={Administration}/>
                <Route path="/addstudent" exact component={AddStudent}/>
        </Switch>
    </Layout>
      </div>
    )
  }
}

export default App
