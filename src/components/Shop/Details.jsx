import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Rater from 'react-rater';
import './Details.css'
function Details() {
    const params = useParams();
    const [product,setProduct]=useState([])
    const getSingleProduct = ()=>{
        return fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }
    useEffect(() => {
            getSingleProduct()
    }, []);
    return (
    <div className='product__item container'>
        <div className="row my-5">
            <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                <img src={product.image} className='w-75 d-block p-5 rounded rounded-4' alt="" />
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="d-flex flex-column justify-content-between">
                <h2 className='fw-bold'>{product.title}</h2>
                <h6 className='fw-bold'>{product.category}</h6>
                <p>{product.description}</p>
                <h5 className='fw-bold'>{product.price} L.E</h5>
                {/* <Rater className="d-flex text-warning fs-3" rating={product.rating.rate} /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details