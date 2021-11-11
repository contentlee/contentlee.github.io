import React from 'react';
import { Link } from 'react-router-dom'
import './List.scss'

function List(props){

  return (
    <div className='list-container'>
      <div className='list-header'>
        <Link to='/list'><div className='all'>All</div></Link>
        <Link to='/list/Furniture'><div className='all'>Furniture</div></Link>
        <Link to='/list/Present'><div className='all'>Present</div></Link>
        <Link to='/list/ETC'><div className='all'>ETC</div></Link>
      </div>
      <hr/>
      <div className='card-list'>

      {props.products.map(function(product){ return <Card product={product}></Card>})}
        


      </div>
    </div>
  )
}

function Card(props){
  return(
        
          <div className='product-card'>
            <Link to={`/detail/${props.product.id}`}>
              <div className='product-container'>
                <img className='product-img' src={props.product.img}/>
                <div className='product-info'>
                  <div className='product-title'>{props.product.title}</div>
                  <div className='product-number'>{props.product.id}</div>
                  <div className='product-price'>{props.product.price}</div>
                  <div className='product-hashtag'>
                  {props.product.hashtag.map((product)=>{
                    return <span>#{product}</span>})}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        
  )}
export default List;