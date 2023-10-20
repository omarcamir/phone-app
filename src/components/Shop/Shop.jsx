import React, { useState } from "react";
import { useEffect } from "react";
import "./Shop.css"
import Rater from "react-rater";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let getProducts = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>{
      setLoading(false)
      setProducts(json)
  });
  };
  useEffect(() => {
    getProducts();
  }, []);

  if(loading){
    return(<div className="container w-100 d-flex justify-content-center align-items-center py-5">
      <Spinner animation="border" variant="dark" size="lg"/>
    </div>
    )
  }
  return (
    <div div className="container py-5">
      <h1>Products</h1>
      <div className="products__list" >
        {products.map((product) => (
          <div className="products__item my-3 text-start p-4">
            <img src={product.image} className="align-self-center" alt="" />
            <h6 className="fw-bold my-2 ">{product.title}</h6>
            <p className="fw-bold">{product.category}</p>
            <p>{product.description.slice(0,70)}...</p>
            <p className="fw-bold">{product.price} L.E</p>
            <Rater className="d-flex text-warning" rating={product.rating.rate} />
            <Link to={`/shop/${product.title}/${product.id}`} className="btn btn-warning my-2 w-50 align-self-center">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
