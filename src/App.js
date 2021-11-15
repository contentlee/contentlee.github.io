import './App.css';
import React, { useState, lazy, Suspense }  from 'react';
import {Route, Switch} from 'react-router-dom'

import data from './data';
import image from './img';



import MainHeader from './components/Header';
import MainFooter from './components/Footer';
import Main from './components/Main';
import Loading from './components/Loading';
let List = lazy(()=> import ('./components/List'));
let Detail = lazy(()=> import('./components/Detail'));
let Cart = lazy(()=>import('./components/Cart'));
let Notice = lazy(()=>import('./components/Notice'));
let Write = lazy(()=>import('./components/Write'))
let SortList = lazy(()=>import('./components/SortList'))
let Favorite = lazy(()=>import('./components/Favorite'))
let Edit = lazy(()=>import('./components/Edit'))



function App() {
  let [products, productsChg] = useState(data);
  let [img, imgChg] = useState(image);


  return (
    <div className="App">

      <MainHeader></MainHeader>
      <Switch>      
        <Route exact path='/'>
          <Main products={products} image={img}></Main>
        </Route>

        <Route exact path='/list'>
          <Suspense fallback ={<Loading></Loading>}>
            <List products={products}></List>
          </Suspense>
        </Route>
        <Route path='/list/:sort'>
          <Suspense fallback ={<Loading></Loading>}>
            <SortList products={products}></SortList>
          </Suspense>
        </Route>
        <Route path='/detail/:id'>
          <Suspense fallback ={<Loading></Loading>}>
          <Detail products={products}></Detail>
          </Suspense>
        </Route>
        <Route path='/cart'>
          <Suspense fallback ={<Loading></Loading>}>
            <Cart></Cart>
            </Suspense>
        </Route>
        <Route path='/favorite'>
          <Suspense fallback ={<Loading></Loading>}>
            <Favorite></Favorite>
            </Suspense>
        </Route>
        <Route path='/notice'>
          <Suspense fallback ={<Loading></Loading>}>
            <Notice></Notice>
          </Suspense>
        </Route>
        <Route path='/write'>
          <Suspense fallback ={<Loading></Loading>}>
            <Write></Write>
          </Suspense>
        </Route>
        <Route path='/edit/:id'>
          <Suspense fallback ={<Loading></Loading>}>
            <Edit></Edit>
          </Suspense>
        </Route>
      </Switch>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
