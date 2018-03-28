import React,{Component} from 'react';
 
class RenderField extends React.Component {
    componentDidMount() {
        const {focusField} = this.props;
        if (this.refs[focusField]) {
            this.refs[focusField].focus();
        }
    }

    render() {
        const {input, label, type, className, meta: {touched,invalid, error}} = this.props;



        return (
            <div className="form-group" >
                <label>{label}</label>
                <div >
                <input className={`form-control ${touched && invalid ? 'has-error' : ''}`} {...input}  placeholder={label} aria-describedby="inputGroupPrepend" type={type}/> 
                    {touched && error && <span className="text-danger">{error}</span>}
                </div>
            </div>
        )
    }
}

export default RenderField