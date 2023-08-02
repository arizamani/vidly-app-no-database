import React from "react";

export default function RegisterForm(){
    return (
        <form>
            <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Family:</label>
                <input type="text" className="form-control" id="family" placeholder="Enter family" name="family" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
            </div>
            <div className="form-check mb-3">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}