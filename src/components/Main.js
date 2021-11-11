import React, { useEffect, useState, useRef} from 'react';
import './Main.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Main(props){

  let state = useSelector((state) => state )

  let [slider, sliderChg] = useState(1);
 
  function sliderleftbtn(){
    if(slider<=1){
      sliderChg(3)
    } else{
      sliderChg(slider-1)
    }
  }
  function sliderrightbtn(){
    if(slider>=3){
      sliderChg(1)
    } else{
      sliderChg(slider+1)
    }
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const cardRef = useRef(null);

  const AllSlides = props.products.length-4;
  
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
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(${-19.7*(currentSlide)}vw)`; 
    }, [currentSlide]);
  

  return (
    <main>
      <div className='section1'>
        <div className='img-container'>
          <img src={`img/slider${slider}.jpg`} className='slider'/>
        </div>
        <div className='btn-container'>
          <img src='img/chevron-left.svg' className='left' onClick={sliderleftbtn}/>
          <img src='img/chevron-right.svg' className='right' onClick={sliderrightbtn}/>
        </div>
      </div>
      <div className='section2'>
        <div className='card-container' ref={slideRef} >
          {props.products.map(function(product){
            return <Card product={product} cardRef={cardRef}></Card>  
          })}
        </div>
        <img src='img/chevron-left.svg' className='left' onClick={PrevSlide}/>
        <img src='img/chevron-right.svg' className='right' onClick={NextSlide}/>
      </div>
      <div className='section3'>
        <div className='notice'>
          <div className='notice-title'>{state.Write[0].title}</div>
          <Link to='/notice'><span className='notice-more'> 더보기 </span></Link>
          <hr/>
          <div className='notice-contents'>{state.Write[0].contents}</div>
          <div className='notice-date'>{state.Write[0].date}</div>
        </div>
      </div>
      <div className='section4'>
        <img className='notice-img' src='img/slider2.jpg'/>
      </div>
    </main>
  )
}

function Card(props){
  return(
    <div className='product-card' ref={props.cardRef}>
      <Link to={`/detail/${props.product.id}`}>
      <img className='product-img' src={props.product.img}/>
      <div className='product-info'>
        <div className='product-title'>{props.product.title}</div>
        <div className='product-price'>{props.product.price}</div>
        <div className='product-contents'>{props.product.contents}</div>
        <div className='product-hashtag'>
          {props.product.hashtag.map((product)=>{
          return <span>#{product}</span>})}
        </div>
      </div>
      </Link>        
    </div>
  )
}



export default Main;