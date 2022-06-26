import "./App.css";
import React, { useState, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import data from "./assets/data";
import image from "./assets/img";

import MainHeader from "./container/common/Header";
import MainFooter from "./container/common/Footer";
import Main from "./container/Main";
import Loading from "./container/common/Loading";
let List = lazy(() => import("./container/product/List"));
let Detail = lazy(() => import("./container/product/Detail"));
let Cart = lazy(() => import("./container/product/Cart"));
let Notice = lazy(() => import("./container/notice/Notice"));
let Write = lazy(() => import("./container/notice/Write"));
let SortList = lazy(() => import("./container/product/SortList"));
let Favorite = lazy(() => import("./container/product/Favorite"));
let Edit = lazy(() => import("./container/notice/Edit"));

function App() {
  let [products, productsChg] = useState(data);
  let [img, imgChg] = useState(image);

  return (
    <div className="App">
      <MainHeader />
      <Switch>
        <Route exact path="/">
          <Main products={products} image={img} />
        </Route>

        <Route exact path="/list">
          <Suspense fallback={<Loading />}>
            <List products={products} />
          </Suspense>
        </Route>
        <Route path="/list/:sort">
          <Suspense fallback={<Loading />}>
            <SortList products={products} />
          </Suspense>
        </Route>
        <Route path="/detail/:id">
          <Suspense fallback={<Loading />}>
            <Detail products={products} />
          </Suspense>
        </Route>
        <Route path="/cart">
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        </Route>
        <Route path="/favorite">
          <Suspense fallback={<Loading />}>
            <Favorite />
          </Suspense>
        </Route>
        <Route path="/notice">
          <Suspense fallback={<Loading />}>
            <Notice />
          </Suspense>
        </Route>
        <Route path="/write">
          <Suspense fallback={<Loading />}>
            <Write />
          </Suspense>
        </Route>
        <Route path="/edit/:no">
          <Suspense fallback={<Loading />}>
            <Edit />
          </Suspense>
        </Route>
      </Switch>
      <MainFooter />
    </div>
  );
}

export default App;
