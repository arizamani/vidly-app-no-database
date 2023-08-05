import React,{ useState } from "react";
import Joi from 'joi';
import Input from "./common/input";

export default function RegisterForm(){

    const [user,setUser] = useState({email:'', pass:'',name:'',remember:false});
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


    return (
        <form onSubmit={submit} noValidate>
            <Input name={'email'} prefix={"reg"} label={"Email"} errors={errors} onChange={changeInputText('email')} value={user.email} />
            <Input name={'name'} prefix={"reg"} label={"Name"} errors={errors} onChange={changeInputText('name')} value={user.name} />
            <Input name={'pass'} prefix={"reg"} label={"Password"} errors={errors} onChange={changeInputText('pass')} value={user.pass} type={'password'} autoComplete="on"/>
            <button type="submit" className="btn btn-primary" disabled={submitState()}>Submit</button>
        </form>
    );
}

//Validation
function validateUser(user,allErrors=false){
    const schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
        name: Joi.string().allow(''),
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