import React, {Component} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem
  
} from 'reactstrap';
import {Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../action/authAction';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.renderlink = this.renderlink.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
 
  
  componentDidMount() {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 30) {
        $('nav').addClass('fixed-top');
      } else {
        $('nav').removeClass('fixed-top');
      }
    });
  }
renderlink() {
  if (this.props.authenticated) {
    return [
      <li className="nav-item" key="logout">
   <Link className="nav-link pad_1" onClick={e=> this.props.logout()} to="/">Logout</Link> 
  </li>,
    <li className="nav-item" key="profile_img">
     <img src={require('../../style/Images/user-4.jpg')}/>
     </li>
    ]
  } 
  else {
    return [
        <li className="nav-item" key="signin">
            <Link className="nav-link pad_1" to="/login">Sign In</Link>
        </li>,
        <li className="nav-item" key="signup">
            <Link className="nav-link pad_1" to="/register">Register</Link>
        </li>
    ];
}
}
  render() {
    return (
      <header>
      <div>
        <Navbar className="headnew_style " color="faded" light expand="lg">
        <div className="container">
          <Link className="navbar-brand" to="/">Game</Link>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto mt-2 mt-lg-0 margin-auto" navbar>
            <NavItem>
              <Link className="nav-link pad_1" to="/dashboard">Game</Link>
            </NavItem>
            </Nav>
            <Nav className="ml-auto mt-lg-0" navbar>
    
              {this.renderlink()}
            
            </Nav>
          
          </Collapse>
          </div>
        </Navbar>
      </div>
      </header>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.auth.authenticated,
    cart:state.cart
  }
}

export default connect(mapStateToProps,{logout})(Header); 