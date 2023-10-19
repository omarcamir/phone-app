import React, { useState } from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import "./Shop.css"
import Rater from "react-rater";
import { Link } from "react-router-dom";
function Shop() {
  const [products, setProducts] = useState([]);
  let getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  useEffect(() => {
    getProducts();
    console.log(products)
  }, []);
  return (
    <div div className="container">
      <h1>Products</h1>
      <div className="products__list" >
        {products.map((product) => (
          <div className="products__item my-3 text-start">
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
