import React ,{Component} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import RenderField from './FormField';

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = "Email is Required"
        
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (!values.password) {
        errors.password = "password is Required";
    }

    return errors;
};
 

class LoginForm extends React.Component {

    renderError() {
        if (this.props.errors) {
            return (
                <div className="alert alert-danger">
                    {this.props.errors}
                </div>
            );
        }
    }
    render(){
        const {handleSubmit, onSubmit, errors}=this.props;
        return (
            <div onSubmit={handleSubmit(onSubmit)} className="login">
            <div className="container">
                <div className="col-lg-6 offset-md-3">
                    <div className="login-form">
                        <div className="login-heading">
                            <h1>Login</h1>
                        </div>
                        <form >

                            <Field
                                name="email"
                                component={RenderField}
                                type="email"
                                placeholder="Email (required)"
                                className="form-control"
                                label="Email"
                                tabIndex="1" valid/>
                            <Field
                                name="password"
                                component={RenderField}
                                type="password"
                                placeholder="Password (required)"
                                className="form-control"
                                label="Password"
                                tabIndex="2"/>
                             {this.renderError()}
                          
 
                
                            <button className="btn btn-primary" tabIndex="6">LogIn</button>
                        </form>
                        <div className="login-in">
                            <Link to="/register">Already Have Account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
 
LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({form: "loginform", validate})(LoginForm);
