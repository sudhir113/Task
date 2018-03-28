import React ,{PureComponent} from "react";
import PropTypes from 'prop-types';
import {connect}    from "react-redux";
 import {login} from '../../action/authAction';
import LoginForm  from "./LoginForm";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import History from '../../history';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
          };
        this.login=this.login.bind(this); 
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
        History.push('/');
      }
    login(formsvalue){
        this.props.login(formsvalue)
    }
 render() {
 
     const {login,errors} =this.props
        return (
             <LoginForm
            onSubmit={this.login}
            login={login}
            errors={errors}
            />

           
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        login: state.auth,
        errors:state.auth.error
    }
}

export default connect(mapStateToProps,{login})(LoginPage);
