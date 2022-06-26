import React from 'react';
import './Footer.scss'

function Footer(){
  return(
    <footer>
      <div className='section'>
        <span className='title'>(주)일상소품</span>
        <span className='contents'>
          <p> 사업자등록번호 132-02-11220 </p><p> 통신판매업신고 안함</p>
          <p> 대표이사 누굴까 </p><p> 안드로메다 은하 M31</p>
          <p> 전화 1234-5678 </p><p> 이메일 ggog@habgyeok.com</p>
        </span>
      </div>
      <div className='section'>
        <span className='title'>고객센터</span>
        <span className='contents'>
          <p> 안드로메다 은하 M31</p>
          <p> 전화 1234-5678</p>
          <p> 결제도용신고 </p>
          <p> 1:1문의는 안됩니다. </p>
        </span>
      </div>
      <div className='section'>
        <span className='title'>전자금융거래 분쟁처리</span>
        <span className='contents'>
          <p> 전화 1234-5678</p>
          <p> 1:1문의는 안됩니다. </p>
        </span>
      </div>
      <div className='logo'>일상小品</div>
    </footer>
  )
}

export default Footer;