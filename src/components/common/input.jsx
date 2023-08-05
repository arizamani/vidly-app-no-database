
import React, { useState } from 'react';

export default function Input({name,prefix,errors,label,type, ...rest}){

    const [passwordField, setPasswordField] = useState({icon:'cursor-pointer bi bi-eye', type});

    const togglePasswordApperance = () => {
        let update = {};
        if (passwordField.type === 'password'){
            update = {icon : 'cursor-pointer bi bi-eye-slash',type:'text'};
        }
        else{
            update = {icon : 'cursor-pointer bi bi-eye',type:'password'};
        }
        setPasswordField(update);
    };

    const icon = type === 'password' ? <i 
        className={passwordField.icon} 
        onClick={togglePasswordApperance} 
        style={{
            position:'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)'
        }}
    ></i> : null;

    return (
        <div className="mb-3">
            <label htmlFor={prefix + '_' + name} className="form-label">{label}</label>
            <div style={{position:'relative'}}>
                <input {...rest} className="form-control" id={prefix + '_' + name} name={name} type={passwordField.type}/>
                {icon}
            </div>
            {errors.path === name && <div className="alert alert-danger rounded-0">{errors.message}</div>}

        </div>
    );
}


