import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import "./Detail.scss";

function Detail(products) {
  let history = useHistory();
  let { id } = useParams();
  let detailProduct = products.find(function (product) {
    return product.id == id;
  });

  let dispatch = useDispatch();

  return (
    <section>
      <span className="back">
        <Link to="/list">목록보기</Link>
      </span>
      <div className="section1">
        <div className="product-container">
          <img
            className="product-img"
            src={detailProduct.img}
            alt="detailProduct"
          />
          <div className="info-container">
            <div className="product-info">
              <div className="product-title">{detailProduct.title}</div>
              <div className="product-number">
                <span>제품번호</span>
                <div className="number">{detailProduct.id}</div>
              </div>
              <div className="product-price">
                <span>판매가격</span>
                <div className="price">￦{detailProduct.price}</div>
              </div>
              <div className="product-plus">
                <span>구매혜택</span>
                <div className="plus">마일리지 적립</div>
              </div>
            </div>
            <button
              className="detail-cart"
              onClick={() => {
                dispatch({
                  type: "addProduct",
                  payload: detailProduct,
                });
                history.push("/cart");
              }}
            >
              장바구니
            </button>

            <button
              className="detail-favorite"
              onClick={() => {
                dispatch({
                  type: "addFav",
                  payload: detailProduct,
                });
                history.push("/favorite");
              }}
            >
              찜하기
            </button>
            <button className="detail-purchase">구매하기</button>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="more-detail">
          <span class="notice-title">상세보기</span>
          <hr />
          <div className="detail-contents">{detailProduct.contents}</div>
        </div>
      </div>
      <div className="section3">
        <div className="shipping-notice">
          <span class="notice-title">배송안내</span>
          <hr />
          <p>
            대한통운 / 로젠 / 한진 <br />
            결제 확인일 기준 3일 이내 배송(평일 기준)
            <br />
            산간, 도서 지역은 배송 기일이 추가적 소요될 수 있습니다.
            <br />
            재고 상황에 따라 배송 기일이 지연될 수 있습니다.
            <br />
            상품은 샌프란시스코 마켓 오프라인 매장과 동시 판매로 결제 완료 후
            준비 중 매장에서 판매되어 품절이 될 수 있는 점 양해 바랍니다.
          </p>
        </div>
        <div className="detail-notice">
          <span class="notice-title">교환 반품 안내</span>
          <hr />
          <ol>
            <li>상품 수령 후 7일 이내에 반송되어야 합니다.</li>
            <li>상품의 택, 라벨제거 및 박스를 훼손한 경우 불가합니다.</li>
            <li>상품 착용 및 세탁, 수선을 한 경우 불가합니다.</li>
            <li>
              단순 변심으로 인한 교환, 환불 시에는 왕복 배송비(6,000원)을
              고객님께서 부담하셔야 합니다.
            </li>
            <li>
              무통장 입금 고객님은 환불 계좌 정보를 작성해 주시기 바랍니다.
            </li>
            <li>교환/환불은 필히 게시판, 고객센터로 연락 주시기 바랍니다.</li>
            <li>SALE, PROMOTION 등의 제품은 교환 및 환불이 불가능합니다.</li>
            <li>상품 수령 후 3일 이내에 카드 취소 및 환불 처리가 됩니다.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Detail;
