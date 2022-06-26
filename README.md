# 리액트 쇼핑몰

리액트를 입문하면서 시작한 프로젝트이구요, 개선해나가야 할 부분도 많지만 가장 기초적인 리액트의 사용을 담을 수 있는 프로젝트라고 생각하고 만들어보았습니다.
소스코드는 master branch에서 확인하실 수 있습니다.
결과물은 다음 링크를 통해 확인하실 수 있습니다.
[일상소품](http://contentlee.github.io)

 

## 리덕스

 상태관리를 위해서(라고는 얘기하지만 써보고 싶어서) 리덕스를 사용해보았구요, 사실 프로젝트가 워낙 소규모라는 생각이 들어 쇼핑몰의 중심 데이터라고 할 수 있는 상품데이터는 props로 간단하게 연결했고, 조금 복잡해질 것 같은 장바구니나 공지사항 페이지의 데이터들만 리덕스로 관리하기 위해 짜보았습니다. 더불어서 페이지의 양이 적기 때문에 페이지별로 컴포넌트를 만들어 구성해보았습니다. 

### App.js

 최대한 구조를 간단하게 만들었구요, <MainHeader>와 <MainFooter>의 경우는 모든 페이지에서 렌더링 될 수 있도록 구성했고, 중간의 페이지들만 렌더링될 수 있도록 짜보았습니다. 라우터 돔의 lazy와 Suspense 라는 모듈을 사용해 필요할 때만 로딩될 수 있도록 했고, 중간중간 로딩되는 동안에 로딩페이지를 보여줄 수 있도록 했습니다. 

```jsx
<MainHeader></MainHeader>
      <Switch>      
        <Route exact path='/'>
          <Main products={products}></Main>
        </Route>
					 {/* 생략 */}
				<Route path='/edit/:id'>
	        <Suspense fallback ={<Loading></Loading>}>
	          <Edit></Edit>
	        </Suspense>
	      </Route>
	    </Switch>
<MainFooter></MainFooter>
```


### List('/list), Detail('/detail/:id)

 상품을 진열하는 페이지와 상세보기 페이지 입니다. 특별하게 구성한 것은 없구요, useParams를 사용하여 상품의 id에 따라 상세페이지에 바인딩되는 데이터가 변경될 수 있도록 했고, useHistory를 사용하여 list 페이지로 돌아갈 수 있는 목록보기 버튼을 만들었습니다. 더불어서 장바구니와 찜하기 버튼을 만들어 특정한 state로 자료가 갈 수 있도록 만들었습니다.

```jsx
						<button className='detail-cart' onClick={()=>{
              dispatch({
                type: 'addProduct', 
                payload: detailProduct
                }); history.push('/cart');
             }}>장바구니</button>
             
            <button className='detail-favorite' onClick={()=>{
              dispatch({
                type: 'addFav',
                payload: detailProduct
              }); history.push('/favorite')
            }} >찜하기</button>
```

### Cart('/cart')

  리덕스를 사용하여 상품이 카트에 들어가고 나오고를 관리할 수 있도록 만들어보았습니다. 좋은 코드인지는 모르겠으나 원하는 기능은 구현하고 있기에 수정을 고민해보고 있습니다.

```jsx
let inCart = []

function Cart(state = inCart, action){
  if(action.type === 'addProduct'){
    let product = [...state];
    let find = product.find((a)=> a.id == action.payload.id)
    if(find===undefined){
      action.payload.cart++;
      product.push(action.payload);
      return product
    } else if (find !==undefined){
      action.payload.cart++;
      return produc
    } 
  } else if(action.type === 'subtractProduct'){
      let product = [...state];
      if(product[action.payload].cart>1){
        product[action.payload].cart--;
        return product 
      } else if (product[action.payload].cart==1){
        let product = [...state];
        product[action.payload].cart = 0
        product.splice(action.payload, 1);
        return product
      } else{
        return state
      }
  }else if(action.type === 'allDelete'){
      let product = [...state];
      product[action.payload].cart = 0
      product.splice(action.payload, 1);
      return product
  }else if(action.type === 'addCart'){
    let product = [...state];
      product[action.payload].cart++;
      return product 
  }else{
      return state
    }
}
```

 그 외에는 map()과 reduce()를 체이닝해 사용해서 장바구니에 있는 구매하게 될 상품의 총 가격을 볼 수 있도록 해보았습니다.

### Notice('/notice'), Write('/write'), Edit('/edit/:id)

  write이나 edit 같은 경우 restful하지 못한 네이밍이라는 생각이 들지만.. 당시에 정신이 없어서 동사를 사용했던 것 같습니다. CRUD 기능에 충실한 페이지를 만들었구요, 상세하거나 깊게 게시물을 쓰지 못하는게 아직은 아쉬운 점인 것 같습니다.  관련 기능 역시 리덕스로 관리할 수 있도록 했구요, 아직은 네이밍 센스가 구린 편이라 이해해주시기 바랍니다.

```jsx
let noticeState = noticeData;

function Write (state = noticeState, action) {
  if (action.type === 'writing') {
    let copy = [...state]
    copy.unshift(action.payload)
    return copy
  }else if(action.type === 'deleting'){
    let copy = [...state]
    copy.splice(action.payload, 1);
    return copy
  }
 else if(action.type === 'editing'){
    let copy = [...state]
    let previousNotice = copy.find( notice => notice.no == action.payload.no)
    console.log(previousNotice)
    copy.splice(previousNotice, 1, action.payload)
    return copy
  }else{
  return state
  }
}
```

 

## SCSS

 최대한 디자인은 스스로 해보려고 노력했습니다. SCSS를 적응해가는 과정이지만 nesting 문법이 편해 사용해보았습니다. 반응형을 만들때도 훨씬 편하게 사용가능해서 좋았습니다.

## 배포

 아직 데이터베이스와 연결하지 못한 상태이지만, 깃헙을 통해 할 수 있는무료 배포를 사용해보았습니다. 

