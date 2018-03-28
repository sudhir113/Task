import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
class Authentication extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    componentDidMount(){
         if(!this.props.authenticated){
             this.props.history.push('/')
         }
        }
    componentWillUpdate(nextProps) {
        console.log('nextprops',nextProps)
            if (!nextProps.authenticated) {
                this.props.history.push('/');
            }
        }
  render() {
    return (
      <div>
        <ComposedComponent {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authenticated: state.auth.authenticated
    }
}
return connect(mapStateToProps)(Authentication);
}
