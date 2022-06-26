import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./Write.scss";

function Write() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let history = useHistory();

  let [title, titleChg] = useState();
  let [contents, contentsChg] = useState();
  let [date, dateChg] = useState();

  let writebtn = () => {
    dispatch({
      type: "writing",
      payload: {
        no: parseInt(state.Write[0].no + 1),
        title: title,
        contents: contents,
        date: date,
      },
    });
    history.push("/notice");
  };

  return (
    <section>
      <div className="write-container">
        <div className="write">
          <input
            className="notice-title"
            placeholder="제목을 입력하세요"
            onChange={(e) => {
              let value = e.target.value;
              titleChg(value);
            }}
          ></input>
          <hr />
          <textarea
            className="notice-contents"
            placeholder="내용을 입력하세요"
            onChange={(e) => contentsChg(e.target.value)}
          ></textarea>
          <hr />
          <input type="date" onChange={(e) => dateChg(e.target.value)}></input>
        </div>
      </div>
      <button className="complete" onClick={writebtn}>
        작성완료
      </button>
    </section>
  );
}

export default Write;
