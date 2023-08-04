import React,{ useState } from "react";
import Joi from 'joi';


export default function LoginForm(){

    const [user,setUser] = useState({email:'', pass:'',remember:false});
    const [errors,setErrors] = useState({path:'', message:''});

    const submit =(e) => {
        e.preventDefault();
        const {value,error} = validateUser(user,true);
        if (!error){
            console.log("Value: ",value);
        }else{
            console.log("Value: ",error.details);
            for (let i = 0; i < error.details.length; i++) {
                console.log("Error: ",error.details[i].message);   
            }
        }
    }

    const changeInputText = (name) => {
        return (e) => {
            let updateUserObject = { ...user, [name]: e.target.value };
            setUser(updateUserObject);
            handleErrors(updateUserObject);
        };
    };
   
    const submitState = () => {
        return (
            user.email !== '' &&
            user.pass !== '' &&
            errors.path === '' &&
            errors.message === '' 
            ? false : true
        );
    }

    //Function
    const handleErrors = (obj) => {
        const {error} = validateUser(obj);
        if (error){
            let err = error.details[0];
            setErrors({path:err.path[0], message:err.message});
        }else{
            setErrors({path:'', message:''});
        }
    }

    const changeCheckBox = (name) => {
        return (e) => {
            setUser({ ...user, [name]: e.target.checked });
        };
    };

    return (
        <form onSubmit={submit} noValidate>
            <div className="mb-3 mt-3">
                <label htmlFor="log-email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="log-email" placeholder="Enter email" name="email" onChange={changeInputText('email')} value={user.email}/>
                {errors.path === 'email' && <div className="alert alert-danger rounded-0">{errors.message}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="log-pwd" className="form-label">Password:</label>
                <input type="password" className="form-control" id="log-pwd" placeholder="Enter password" name="pass" autoComplete="on" onChange={changeInputText('pass')} value={user.pass}/>
                {errors.path === 'pass' && <div className="alert alert-danger rounded-0">{errors.message}</div>}
            </div>
            <div className="form-check mb-3">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" onChange={changeCheckBox('remember')}/> Remember me
                </label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={submitState()}>Submit</button>
        </form>
    );
}

//Validation
function validateUser(user,allErrors=false){
    const schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
        pass: Joi.string().min(6).max(255).required().label('Password')
        .ruleset.pattern(/^[^\\/\^:;=\<>+*]+$/)
        .message("for password field the Characters: [ ^, /, \\, :, ;, <, >, =, +, * ] is not valid!")
        .ruleset.pattern(/^([\d\w\S]*[A-Z]+[\d\w\S]*){3}$/)
        .message("Atleast 3 Capital character is needed!")
        .ruleset.custom(function(value, helpers){
            let counter = 0; 
            for (let i = 0; i < 10; i++) {
                let expression = `${i}`;
                let regex = new RegExp(expression, 'ig');
                let result = value.match(regex);
                if (result!= null && result.length>3){
                    counter++;
                }
            }
            if (counter>0){
                throw new Error("Not include");  
            }else{
                return value;
            }
        }).message("You couldn't use more than 3 repeated Digit!"),
        remember: Joi.boolean()
    });

    return schema.validate(user,allErrors ? {abortEarly: false} : {abortEarly: true});
}