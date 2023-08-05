import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from 'joi';
import Input from "./common/input";

export default function MovieForm({defaultTitle,defaultGenre,defaultStock,defaultRate}){

    const navigation = useNavigate();
    const [data,setData] = useState({title:defaultTitle, genre:defaultGenre,numberInStock:defaultStock,dailyRentalRate:defaultRate});
    const [errors,setErrors] = useState({path:'', message:''});

    const submit =(e) => {
        e.preventDefault();
        const {value,error} = validateUser(data,true);
        if (!error){
            console.log("Value: ",value);
            navigation("../movies",{
                state:value,
                replace:true
            })
        }else{
            console.log("Value: ",error.details);
            for (let i = 0; i < error.details.length; i++) {
                console.log("Error: ",error.details[i].message);   
            }
        }
    }

    const changeInputText = (name) => {
        
        return (e) => {
            let updateUserObject = { ...data, [name]: e.target.value };
            setData(updateUserObject);
            handleErrors(updateUserObject);
        };
    };
   
    const submitState = () => {
        const {error} = validateUser(data,true);
        return !error ? false : true
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
        <form onSubmit={submit} noValidate className="mb-3"> 
            <Input name={'title'} prefix={"move"} label={"Title"} errors={errors} onChange={changeInputText('title')} value={data.title} />
            <div className="mb-3">
                <label htmlFor="genre" className="form-label">Genre</label>
                <select className="form-select" id="mov-genre" name="genre" defaultValue={data.genre} onChange={changeInputText('genre')} >
                    <option value='Action'>Action</option>
                    <option value='Comedy'>Comedy</option>
                    <option value='Thriller'>Thriller</option>
                </select>
                {errors.path === 'genre' && <div className="alert alert-danger rounded-0">{errors.message}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="stock">Number in Stock</label>
                <input type="number" id="mov-stock" className="form-control" name="stock" min="-1" max="100" value={data.numberInStock} onChange={changeInputText('numberInStock')}/>
                {errors.path === 'numberInStock' && <div className="alert alert-danger rounded-0">{errors.message}</div>}
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="rate">Rate</label>
                <input type="number" id="mov-rate" className="form-control" name="rate" step="0.25" min="0" max="5" value={data.dailyRentalRate} onChange={changeInputText('dailyRentalRate')}/>
                {errors.path === 'dailyRentalRate' && <div className="alert alert-danger rounded-0">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary" disabled={submitState()}>Submit</button>
        </form>
    );
}

//Validation
function validateUser(user,allErrors=false){
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).required().label('Title'),
        genre: Joi.string().label('Genre'),
        numberInStock: Joi.number().min(-1).max(100).required().label('Number in Stock'),
        dailyRentalRate: Joi.number().min(0).max(5).required().label('Rate')
    });

    return schema.validate(user,allErrors ? {abortEarly: false} : {abortEarly: true});
}