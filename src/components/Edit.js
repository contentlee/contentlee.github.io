import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams,  } from 'react-router';
import './Write.scss'


function Edit(props){

  let state = useSelector((state) => state )
  let dispatch = useDispatch();
  let history = useHistory();

  let {id} = useParams();
  

  let [title, titleChg] = useState()
  let [contents, contentsChg] = useState()
  let [date, dateChg] = useState()
 
  let editbtn = ()=>{
    dispatch({
    type: 'editing',
    payload: {id:state.Write.length ,title: title, contents: contents}
  }); history.push('/notice')
}
  
  return (
    <section>
      <div className='write-container'>
        <div className='write'>
          <input className='notice-title' value={state.Write[id].title} onChange={(e)=> titleChg(e.target.value)}></input>
          <hr/>
          <textarea className='notice-contents' value={state.Write[id].contents} onChange={(e)=> contentsChg(e.target.value)}></textarea>
        </div>
      </div>
      <button className='complete' onClick={editbtn()}>작성완료</button>
    </section>
  )
}

export default Edit;