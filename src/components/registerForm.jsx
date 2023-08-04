import React,{useState} from "react";

export default function RegisterForm(){

    const [user,setUser] = useState({name:'', family:'',email:'', pass:'',remember:false})
    const submit =(e) => {
        e.preventDefault();
    }

    const changeInputText = (name) => {
        return (e) => {
            setUser({ ...user, [name]: e.target.value });
        };
    };

    const changeCheckBox = (name) => {
        return (e) => {
            setUser({ ...user, [name]: e.target.checked });
        };
    };
   
    return (
        <form onSubmit={submit}>
            <div className="mb-3 mt-3">
                <label htmlFor="reg-name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="reg-name" placeholder="Enter name" name="name" onChange={changeInputText('name')} value={user.name}/>
            </div>
            <div className="mb-3">
                <label htmlFor="reg-family" className="form-label">Family:</label>
                <input type="text" className="form-control" id="reg-family" placeholder="Enter family" name="family" onChange={changeInputText('family')} value={user.family}/>
            </div>
            <div className="mb-3">
                <label htmlFor="reg-email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="reg-email" placeholder="Enter email" name="email" onChange={changeInputText('email')} value={user.email}/>
            </div>
            <div className="mb-3">
                <label htmlFor="reg-pwd" className="form-label">Password:</label>
                <input type="password" className="form-control" id="reg-pwd" placeholder="Enter password" name="pswd" autoComplete="on" onChange={changeInputText('pass')} value={user.pass}/>
            </div>
            <div className="form-check mb-3">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" onChange={changeCheckBox('remember')}/> Remember me
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}