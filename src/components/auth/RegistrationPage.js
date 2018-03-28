import React ,{PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect}    from "react-redux";
import RegistrationForm  from "./RegistrationForm";
import {register} from '../../action/authAction';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);

        this.register = this.register.bind(this);
    }

    register(formData) {
      this.props.register(formData)
    }

    render() {
        const {registration, errors} = this.props;
         console.log('errors',errors)
        return (
            <RegistrationForm
            onSubmit={this.register}
            registration={registration}
            errors1={errors}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('mapstatetoprops',state);
    return {
        registation: state.auth,
        errors: state.auth.error
    }
}


export default connect(mapStateToProps,{register})(SignupPage);
