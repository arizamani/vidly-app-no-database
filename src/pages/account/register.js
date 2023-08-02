
import React from 'react';
import RegisterForm from '../../components/registerForm';

export default function Register(){
    
    return (
        <div className='row mb-5'>
            <div className='col-4'>
                <h1 className='mt-3'>Register</h1>
                <RegisterForm />
            </div>
        </div>

    );
}