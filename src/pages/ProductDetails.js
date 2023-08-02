
import React,{useEffect} from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import _ from 'lodash';


export default function ProductDetails({allowableId}){
    const params = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    //console.log(_.includes(allowableId,id));
    //console.log(typeof id);
    useEffect(() => {
        if(!_.includes(allowableId,parseInt(params.id))) navigate('./not-found',);
    }); 
   
    return (
        <main className="container-sm mt-4">
            <div className='row'>
                <h1>Product {params.id}</h1>
                <button className='btn btn-success rounded-pill' style={{ maxWidth: "120px"}} onClick={() => navigate('/',{replace:true}) }>Submit!</button>
            </div>
        </main>
    );
}