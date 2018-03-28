import React ,{Component} from "react";
import PropTypes from 'prop-types';
import {connect}    from "react-redux";
import GameForm  from "./GameForm";
import {gameAction,onChangeInput} from '../../action/gameAction'
import History from '../../history';

class GamePage extends React.Component {
    constructor(props) {
        super(props);
        this.login=this.login.bind(this); 
        this.array_size=this.array_size.bind(this); 
    }
    array_size(value){
        console.log('array size called',value);
        this.props.onChangeInput(value)
    }
    login(formsvalue){
        console.log('register is called',formsvalue)
        this.props.gameAction(formsvalue)
    }
 render() {
 
     const {result,errors,array_size} =this.props
     console.log('login pGE',this)
        return (
           <div className="col-md-6 padd_1">
            <GameForm
            onSubmit={this.login}
            result={result}
            errors={errors}
            array_size={this.array_size}
            />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log('result',state)
    return {
        result: state.result,
    }
}


export default connect(mapStateToProps,{gameAction,onChangeInput})(GamePage);
