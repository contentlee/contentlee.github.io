import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import './Write.scss'


function Edit(){

  let state = useSelector((state) => state )
  let dispatch = useDispatch();
  let history = useHistory();

  let {no} = useParams();

  let editNotice = state.Write.find(function(notice){return notice.no == no})

  let [title, titleChg] = useState(editNotice.title)
  let [contents, contentsChg] = useState(editNotice.contents)
  let [date, dateChg] = useState(editNotice.date)
 
  let editbtn = ()=>{
    dispatch({
    type: 'editing',
    payload: {no: editNotice.no, title: title, contents: contents, date: date}
    }); 
    history.push('/notice')
  }
  
  return (
    <section>
      <div className='write-container'>
        <div className='write'>
          <input className='notice-title' value={title} onChange={(e)=>{titleChg(e.target.value)}}></input>
          <hr/>
          <textarea className='notice-contents' value={contents} onChange={(e)=> contentsChg(e.target.value)}></textarea>
          <input type='date' value={date} onChange={(e)=> dateChg(e.target.value)}></input>
        </div>
      </div>
      <button className='complete' onClick={editbtn}>작성완료</button>
    </section>
  )
}

export default Edit;