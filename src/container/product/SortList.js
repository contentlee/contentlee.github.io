import React from "react";
import { Link, useParams } from "react-router-dom";
import "./List.scss";

function List({ products }) {
  let { sort } = useParams();
  let sortProduct = products.filter(function (product) {
    return product.sort === sort;
  });

  return (
    <div className="list-container">
      <div className="list-header">
        <Link to="/list">
          <div className="all">All</div>
        </Link>
        <Link to="/list/Supplies">
          <div className="all">Writing Supplies</div>
        </Link>
        <Link to="/list/Present">
          <div className="all">Present</div>
        </Link>
        <Link to="/list/ETC">
          <div className="all">ETC</div>
        </Link>
      </div>
      <hr />
      <div className="card-list">
        {sortProduct.map(function (product) {
          return <Card product={product}></Card>;
        })}
      </div>
    </div>
  );
}

function Card({ product }) {
  return (
    <div className="product-card">
      <Link to={`/detail/${product.id}`}>
        <div className="product-container">
          <img className="product-img" src={product.img} alt="product" />
          <div className="product-info">
            <div className="product-title">{product.title}</div>
            <div className="product-number">No. {product.id}</div>
            <div className="product-price">￦{product.price}</div>
            <div className="product-hashtag">
              {product.hashtag.map((product) => {
                return <span>#{product}</span>;
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default List;
