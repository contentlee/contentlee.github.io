import React, { useState} from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

function MainHeader(){
let [nav, navchange] = useState(true)
function navbtn(){navchange(!nav)};

let state = useSelector((state) => state )
let dispatch = useDispatch();

  return (
    <header>
      <div className="header-container">
        <div className='menu-btn'>
          <img src='img/menu.svg' className='btn' onClick={navbtn}/>
        </div>
        <div className='logo-container'>
          <Link to='/'><div className='logo'>일상小品</div></Link>
        </div>
        <div className='personal-btn'>
          <div className='cart'>
            <Link to='/cart'><img src='img/cart.svg' className='btn'/></Link>
            <span className='cur-cart'>{state.Cart.length}</span>
          </div>
          <div className='favorite'>
            <Link to='/favorite'><img src='img/favorite.svg' className='btn'/></Link>
            <span className='cur-favorite'>{state.Favor.length}</span>
          </div>
        </div>
      </div>
      <nav className={ nav? 'nav-container nav-hidden' : 'nav-container nav-diplay'}>
        <img src='img/arrow-back.svg' onClick={navbtn}></img>
        <div className='logo-container'>
          <Link to='/'><div className='logo' onClick={navbtn}>일상小品</div></Link>
        </div>
        <ul>
          <li className='All' onClick={navbtn}><Link to='/list'>All</Link></li>
          <li><Link to='/list/Furniture' onClick={navbtn}>Funiture</Link></li>
          <li><Link to='/list/Present' onClick={navbtn}>Presents</Link></li>
          <li><Link to='/list/ETC' onClick={navbtn}>ETC</Link></li>
          <li className='Notice'><Link to='/notice' onClick={navbtn}>Notice</Link></li>
        </ul>

      </nav>
    </header>
  )
}

export default MainHeader;