import React from "react";
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

class RegistrationForm extends React.Component {
    renderError() {
        if (this.props.errors1) {
            return (
                <div className="alert alert-danger">
                    {this.props.errors1}
                </div>
            );
        }
    }
    render(){
        const {handleSubmit, onSubmit, errors1}=this.props;
        return(
            <div onSubmit={handleSubmit(onSubmit)} className="register">
            <div className="container">
                <div className="col-lg-6 offset-md-3">
                    <div className="register-form">
                        <div className="register-heading">
                            <h1>Register</h1>
                        </div>
                        <form >
                            <Field
                                name="firstName"
                                component={RenderField}
                                type="text"
                                placeholder="First Name (optional)"
                                className="form-control"
                                label="First Name"
                                tabIndex="1"
                                focusField="firstName"/>
                            <Field
                                name="email"
                                component={RenderField}
                                type="email"
                                placeholder="Email (required)"
                                className="form-control"
                                label="Email"
                                tabIndex="3"/>
                            <Field
                                name="password"
                                component={RenderField}
                                type="password"
                                placeholder="Password (required)"
                                className="form-control"
                                label="Password"
                                tabIndex="4"/>
                            {this.renderError()}
                            <button className="btn btn-primary" tabIndex="6">Register</button>
                        </form>
                        <div className="register_sign-in">
                            <Link to="/login">Need an Account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


RegistrationForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({form: "registrationform", validate})(RegistrationForm);
