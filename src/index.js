import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import noticeData from "./assets/noticeData";

let inCart = [];

function Cart(state = inCart, action) {
  if (action.type === "addProduct") {
    let product = [...state];
    let find = product.find((a) => a.id === action.payload.id);
    if (find === undefined) {
      action.payload.cart++;
      product.push(action.payload);
      return product;
    } else if (find !== undefined) {
      action.payload.cart++;
      return product;
    }
  } else if (action.type === "subtractProduct") {
    let product = [...state];
    if (product[action.payload].cart > 1) {
      product[action.payload].cart--;
      return product;
    } else if (product[action.payload].cart === 1) {
      let product = [...state];
      product[action.payload].cart = 0;
      product.splice(action.payload, 1);
      return product;
    } else {
      return state;
    }
  } else if (action.type === "allDelete") {
    let product = [...state];
    product[action.payload].cart = 0;
    product.splice(action.payload, 1);
    return product;
  } else if (action.type === "addCart") {
    let product = [...state];
    product[action.payload].cart++;
    return product;
  } else {
    return state;
  }
}

let inFav = [];

function Favor(state = inFav, action) {
  if (action.type === "addFav") {
    let product = [...state];
    let find = product.find((a) => a.id === action.payload.id);
    if (find === undefined) {
      action.payload.favorite++;
      product.push(action.payload);
      return product;
    } else if (find !== undefined) {
      return product;
    }
  } else if (action.type === "FavDelete") {
    let product = [...state];
    product[action.payload].cart = 0;
    product.splice(action.payload, 1);
    return product;
  } else {
    return state;
  }
}

let noticeState = noticeData;

function Write(state = noticeState, action) {
  if (action.type === "writing") {
    let copy = [...state];
    copy.unshift(action.payload);
    return copy;
  } else if (action.type === "deleting") {
    let copy = [...state];
    copy.splice(action.payload, 1);
    return copy;
  } else if (action.type === "editing") {
    let copy = [...state];
    let previousNotice = copy.find((notice) => notice.no == action.payload.no);
    console.log(previousNotice);
    copy.splice(previousNotice, 1, action.payload);
    return copy;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ Cart, Favor, Write }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
