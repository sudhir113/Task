import React ,{Component} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import RenderField from './FormField';

const validate = values => {
    let array_size = values.array_size;
    console.log('array_size',array_size);
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
 

class GameForm extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps',)
    }
      
      

    renderError() {
        if (this.props.errors) {
            return (
                <div className="alert alert-danger">
                    <String>Oops! {this.props.errorMessage}</String>
                </div>
            );
        }
    }
renderArray(){
    let Size = this.props.result.size;
    console.log('size',typeof(Size));
    var rows = [];
    if(Size !== undefined){
    for (var i = 0; i < Size; i++) {
        rows.push(<div> <Field
            key={i}
            name={i}
             component={RenderField}
             type="text"
             placeholder="Please Enter Input Array size"
             className="form-control"
             label=" Input array"
             tabIndex="4" valid/> </div>);
    }
    return rows
}else {
    return null
}
}
    render(){
        const {handleSubmit, onSubmit, errors,validate,result,array_size}=this.props;
     
        return (
            <div  onSubmit={handleSubmit(onSubmit)} className="game  bg-wt">
                <div className="col-lg-6">
                    <div className="number-form">
                        <div className="number-heading">
                            <h1>Game</h1>
                        </div>
                        <form >

                           <Field
                                name="array_size"
                                component={RenderField}
                                type="number"
                                placeholder="Please Enter Input Array size"
                                className="form-control"
                                label="Input Array size"
                                tabIndex="1" valid
                                onChange={(e) =>  {array_size(e.target.value)}}
                                /> 
                            Input type:<Field name="Input_type" component="select">
                             <option defaultValue="Single">Single</option>
                            <option value="Multiple">Multiple</option>
                            </Field><br/>
                          <div>{this.renderArray()}</div>
                         
                            Output type: <Field name="output_type" component="select">
                             <option value="one" >Single</option>
                            <option value="many">Multiple</option>
                            </Field>
                           
                             <Field
                                name="Array_count"
                                component={RenderField}
                                type="number"
                                placeholder="Please Enter Input Array size"
                                className="form-control"
                                label=" Array count"
                                tabIndex="5" valid/>
                             {this.renderError()}
                          
 
                
                            <button className="btn btn-primary" tabIndex="6">Submit</button>
                        </form>
                        
                </div>
            </div>
        </div>
        )
    }
}
 
GameForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({form: "gameform", validate})(GameForm);
