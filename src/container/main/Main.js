import React, { useEffect, useState, useRef } from "react";
import "./Main.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Main({ image, products }) {
  let state = useSelector((state) => state);

  let [slider, change] = useState(0);
  const RightSlide = () => {
    if (slider < image.length - 1) {
      change(++slider);
    } else if ((slider = image.length)) {
      change(0);
    }
  };
  const LeftSlide = () => {
    if (slider > 0) {
      change(--slider);
    } else if (slider === 0) {
      change(image.length - 1);
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const AllSlides = products.length - 4;

  const NextSlide = () => {
    if (currentSlide >= AllSlides) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(AllSlides);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(${-19.7 * currentSlide}vw)`;
  }, [currentSlide]);

  return (
    <main>
      <div className="section1">
        <div className="img-container">
          {image.map((img, i) => {
            if (slider === i) {
              return <img src={img} alt={i} />;
            } else {
              return null;
            }
          })}
        </div>
        <div className="btn-container">
          <img
            src="img/chevron-left.svg"
            className="left"
            alt="left"
            onClick={LeftSlide}
          />
          <img
            src="img/chevron-right.svg"
            className="right"
            alt="right"
            onClick={RightSlide}
          />
        </div>
      </div>
      <div className="section2">
        <div className="card-container" ref={slideRef}>
          {products.map(function (product) {
            return <Card product={product}></Card>;
          })}
        </div>
        <img
          src="img/chevron-left.svg"
          className="left"
          alt="left"
          onClick={PrevSlide}
        />
        <img
          src="img/chevron-right.svg"
          className="right"
          alt="right"
          onClick={NextSlide}
        />
      </div>
      <div className="section3">
        <div className="notice">
          <div className="notice-title">{state.Write[0].title}</div>
          <Link to="/notice">
            <span className="notice-more"> 더보기 </span>
          </Link>
          <hr />
          <div className="notice-contents">{state.Write[0].contents}</div>
          <div className="notice-date">{state.Write[0].date}</div>
        </div>
      </div>
      <div className="section4">
        <img className="notice-img" src="img/slider2.jpg" alt="notice" />
      </div>
    </main>
  );
}

function Card({ product }) {
  return (
    <div className="product-card">
      <Link to={`/detail/${product.id}`}>
        <img className="product-img" src={product.img} alt="product" />
        <div className="product-info">
          <div className="product-title">{product.title}</div>
          <div className="product-price">￦{product.price}</div>
          <div className="product-contents">{product.contents}</div>
          <div className="product-hashtag">
            {product.hashtag.map((product) => {
              return <span>#{product}</span>;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Main;
