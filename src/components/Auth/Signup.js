import React , {Component} from 'react';
import {reduxForm,Field} from 'redux-form';

class SignUp extends Component{

    onSubmit=(formProps)=>{
        console.log(formProps);
    };

    render(){

        const {handleSubmit}=this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                <label>UserName</label>
                <Field
                name="UserName"
                type="text"
                placeholder="Enter your Username" 
                component="input"
                autoComplete="none"
                />
                </fieldset>
                <fieldset>
                <label>Password</label>
                <Field
                name="Password"
                type="password"
                placeholder="Enter your Password" 
                component="input"
                autoComplete="none"
                />
                </fieldset>
                <button>SignUp</button>
            </form>
        );
    }
    
}
export default reduxForm({form:'signup'})(SignUp);