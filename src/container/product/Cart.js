import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Cart.scss";

function Cart() {
  let history = useHistory();
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  let priceHab = function () {
    if (state.Cart.length > 0) {
      let count1 = state.Cart.map(
        (product) => product.price * product.cart
      ).reduce(function (sum, currValue) {
        return sum + currValue;
      });
      return count1;
    } else {
      return 0;
    }
  };

  let shipping = function () {
    if (state.Cart.length > 0) {
      let count2 = state.Cart.map((product) => product.shipping).reduce(
        function (sum, currValue) {
          return sum + currValue;
        }
      );
      return count2;
    } else {
      return 0;
    }
  };

  let total = function () {
    if (state.Cart.length > 0) {
      let count3 = shipping() + priceHab();
      return count3;
    } else {
      return 0;
    }
  };

  return (
    <div className="cart-container">
      <span className="title">장바구니</span>
      <table>
        <tr align="center">
          <td width="10%">상품번호</td>
          <td width="30%">이름</td>
          <td width="20%">가격</td>
          <td width="10%" height="30px">
            삭제
          </td>
          <td width="15%">수량</td>
          <td>배송비</td>
        </tr>
        {state.Cart.map(function (product, i) {
          return <Product state={product} dispatch={dispatch} i={i}></Product>;
        })}
        <tr>
          <td colSpan="6" align="right" height="60px">
            총 {state.Cart.length} 개의 상품금액 ￦{priceHab()} + 배송비 ￦
            {shipping()} <br />= 합계 ￦{total()}
          </td>
        </tr>
      </table>

      <div className="continue-btn">
        <img src="img/arrow-back.svg" alt="arrowBack" />
        <span
          onClick={() => {
            history.goBack();
          }}
        >
          계속 쇼핑하기
        </span>
      </div>

      <div className="btn-container">
        <button className="all-purchase">구매하기</button>
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <tr align="center">
      <td>{props.state.id}</td>
      <td>{props.state.title}</td>
      <td>￦{props.state.price}</td>
      <td
        height="60px"
        className="delete"
        onClick={() => {
          props.dispatch({
            type: "allDelete",
            payload: props.i,
          });
        }}
      >
        X
      </td>
      <td>
        <span
          onClick={() => {
            props.dispatch({
              type: "addCart",
              payload: props.i,
            });
          }}
        >
          +
        </span>
        <span>{props.state.cart}</span>
        <span
          onClick={() => {
            props.dispatch({
              type: "subtractProduct",
              payload: props.i,
            });
          }}
        >
          -
        </span>
      </td>
      <td>{props.state.shipping}</td>
    </tr>
  );
}

export default Cart;
