(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[3],{43:function(t,e,c){},49:function(t,e,c){"use strict";c.r(e);c(1);var n=c(8),i=c(2),r=(c(43),c(0));function s(t){return Object(r.jsxs)("tr",{align:"center",children:[Object(r.jsx)("td",{children:t.state.id}),Object(r.jsx)("td",{children:t.state.title}),Object(r.jsxs)("td",{children:["\uffe6",t.state.price]}),Object(r.jsx)("td",{height:"60px",className:"delete",onClick:function(){t.dispatch({type:"allDelete",payload:t.i})},children:"X"}),Object(r.jsxs)("td",{children:[Object(r.jsx)("span",{onClick:function(){t.dispatch({type:"addCart",payload:t.i})},children:"+"}),Object(r.jsx)("span",{children:t.state.cart}),Object(r.jsx)("span",{onClick:function(){t.dispatch({type:"subtractProduct",payload:t.i})},children:"-"})]}),Object(r.jsx)("td",{children:t.state.shipping})]})}e.default=function(t){var e=Object(i.f)(),c=Object(n.c)((function(t){return t})),a=Object(n.b)(),d=function(){return c.Cart.length>0?c.Cart.map((function(t){return t.price*t.cart})).reduce((function(t,e){return t+e})):0},j=function(){return c.Cart.length>0?c.Cart.map((function(t){return t.shipping})).reduce((function(t,e){return t+e})):0};return Object(r.jsxs)("div",{className:"cart-container",children:[Object(r.jsx)("span",{className:"title",children:"\uc7a5\ubc14\uad6c\ub2c8"}),Object(r.jsxs)("table",{children:[Object(r.jsxs)("tr",{align:"center",children:[Object(r.jsx)("td",{width:"10%",children:"\uc0c1\ud488\ubc88\ud638"}),Object(r.jsx)("td",{width:"30%",children:"\uc774\ub984"}),Object(r.jsx)("td",{width:"20%",children:"\uac00\uaca9"}),Object(r.jsx)("td",{width:"10%",height:"30px",children:"\uc0ad\uc81c"}),Object(r.jsx)("td",{width:"15%",children:"\uc218\ub7c9"}),Object(r.jsx)("td",{children:"\ubc30\uc1a1\ube44"})]}),c.Cart.map((function(t,e){return Object(r.jsx)(s,{state:t,dispatch:a,i:e})})),Object(r.jsx)("tr",{children:Object(r.jsxs)("td",{colSpan:"6",align:"right",height:"60px",children:["\ucd1d ",c.Cart.length," \uac1c\uc758 \uc0c1\ud488\uae08\uc561 \uffe6",d()," + \ubc30\uc1a1\ube44 \uffe6",j()," ",Object(r.jsx)("br",{}),"= \ud569\uacc4 \uffe6",c.Cart.length>0?j()+d():0]})})]}),Object(r.jsxs)("div",{className:"continue-btn",children:[Object(r.jsx)("img",{src:"img/arrow-back.svg",alt:"arrowBack"}),Object(r.jsx)("span",{onClick:function(){e.goBack()},children:"\uacc4\uc18d \uc1fc\ud551\ud558\uae30"})]}),Object(r.jsx)("div",{className:"btn-container",children:Object(r.jsx)("button",{className:"all-purchase",children:"\uad6c\ub9e4\ud558\uae30"})})]})}}}]);
//# sourceMappingURL=3.e141108e.chunk.js.map