import React,{Component} from 'react';
import {Route,Router,Redirect} from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegistrationPage';
import ForgotPassword from '../components/auth/ForgotPassword';
import requireauth from '../components/auth/require_auth';
import HomePage from '../components/Home/HomePage';
import GamePage from '../components/Game/GamePage';

class Routes extends React.Component{
    render(){
        return(
            <div>
            {<Header/>}

          
            
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route exact path="/forgotpassword" component={ForgotPassword}/>
            <Route exact path="/dashboard" component={requireauth(GamePage)}/>
            {<Footer/>}
            </div>
        )
    }
}

export default Routes;