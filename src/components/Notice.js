import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Notice.scss'

function Notice(props){

  let state = useSelector((state) => state )
  let dispatch = useDispatch();
  return (
    <section>
      <div className='btn-container'>
      <Link to='/write'><button className='write-btn'>글쓰기</button></Link>
      </div>
     
      {state.Write.map((a,i)=>{
        return  (
          <div className='notice-container'>
            <div className='notice'>
              <div className='notice-title'>{a.title}</div>
              <span className='notice-delete'onClick={()=>{
              dispatch({
                type: 'deleting', 
                payload: i
                }); 
             }}> 삭제 </span>
              <Link to={`/edit/${a.id}`}><span className='notice-edit'> 수정 </span></Link>
              <hr/>
              <div className='notice-contents'>{a.contents}</div>
              <div className='notice-date'>{a.date}</div>
            </div>
          </div>
        )
      })}
     
    </section>
  )
}

export default Notice;