import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory} from 'react-router-dom'
import './Cart.scss'

function Favorite(props){

  let history = useHistory();
  let state = useSelector((state) => state )
  let dispatch = useDispatch();
 


  return(
    <div className='cart-container'>
      <span className='title'>찜하기</span>      
      <table>
        <tr align='center'>          
          <td width='20%'>상품번호</td>
          <td width='30%'>이름</td>
          <td width='20%'>가격</td>
          <td width='20%' height='30px'>삭제</td>
        </tr>
        {state.Favor.map(function(state, i){
          return <Product state={state} dispatch={dispatch} i={i}></Product>
        })}
        <tr>
          <td colSpan='6' align='right' height='60px'>
           </td>
        </tr>
      </table>
    
      <div className='continue-btn'>
        <img src='img/arrow-back.svg' alt='arrow-back'/>
        <span onClick={()=>{history.goBack()}}>계속 쇼핑하기</span>
      </div>
      
      <div className='btn-container'>

        <button className='all-purchase'>구매하기</button>
      </div>
      
    </div>
  )}

  function Product(props){
    return(
    <tr align='center'>
      <td>{props.state.id}</td>
      <td>{props.state.title}</td>
      <td>￦{props.state.price}</td>
      <td height='60px' className='delete' onClick={()=>{
        props.dispatch({
          type: 'Favor',
          payload: props.i
        })
      }}>X</td>
    </tr>
    )
  }


  export default Favorite;