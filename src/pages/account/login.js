
import React from 'react';
import LoginForm from '../../components/loginForm';

export default function Login(){
    
    return (
        <div className='row mb-5'>
            <div className='col-4'>
                <h1 className='mt-3'>Login</h1>
                <LoginForm />
            </div>
        </div>

    );
}