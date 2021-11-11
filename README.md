# 리액트 쇼핑몰

리액트를 입문하면서 시작한 프로젝트이구요, 개선해나가야 할 부분도 많지만 가장 기초적인 리액트의 사용을 담을 수 있는 프로젝트라고 생각하고 만들어보았습니다.

 

## 리액트의 사용

 리액트 프로젝트이니, 어떻게 리액트를 사용했는지 말씀드리는게 좋을 것 같습니다. 먼저 클래스형 컴포넌트보다는 함수형 컴포넌트를 사용하여 코드를 짰구요, useState, useEffect, useRef 등과 같은 hook을 사용하여 코드의 편의성을 더했습니다. 당연히 라우팅을 위해서 리액트 라우터 돔의 BrowserRouter, Link, Route, Switch, useHistory, useParams 등의 모듈을 사용했습니다. 상태관리를 위해서(라고는 얘기하지만 써보고 싶어서) 리덕스를 사용해보았구요, 사실 프로젝트가 워낙 소규모라는 생각이 들어 쇼핑몰의 중심 데이터라고 할 수 있는 상품데이터는 props로 간단하게 연결했고, 조금 복잡해질 것 같은 장바구니나 공지사항 페이지의 데이터들만 리덕스로 관리하기 위해 짜보았습니다. 더불어서 페이지의 양이 적기 때문에 페이지별로 컴포넌트를 만들어 구성해보았습니다. 

### App.js

 최대한 구조를 간단하게 만들었구요, <MainHeader>와 <MainFooter>의 경우는 모든 페이지에서 렌더링 될 수 있도록 구성했고, 중간의 페이지들만 중복되지 않게(Switch) 나올 수 있도록 짜보았습니다. 라우터 돔의 lazy와 Suspense 라는 모듈을 사용해 필요할 때만 로딩될 수 있도록 했고, 중간중간 로딩되는 동안에 로딩페이지를 보여줄 수 있도록 했습니다. 

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

### Main('/')

  사실 특별한 기술을 사용하지 않아 강조할만한 게 없지만 그래도 얘기할 만한 것은 슬라이더 부분일 것 같습니다. 그림만을 보여주는 슬라이더와 상품을 보여주는 슬라이더 두 개가 있는데요, 둘을 조금 다르게 짜보았습니다.

 첫번째 슬라이더는 파일의 이름에 따라 변할 수 있도록 짜보았습니다. 예를들어 버튼을 눌렀을 때 그림1이 그림2로 대체될 수 있도록  했습니다. 아직은 코드의 수준이 하드코딩을 크게 벗어나지 못한 것 같아 곧 바꿔볼 예정입니다. 

```jsx
function sliderleftbtn(){
    if(slider<=1){
      sliderChg(3)
    } else{
      sliderChg(slider-1)
    }
  }
  function sliderrightbtn(){
    if(slider>=3){
      sliderChg(1)
    } else{
      sliderChg(slider+1)
    }
  }

```

 두 번째 슬라이더의 경우 구글링을 해서 얻은 코드입니다. 물론 원리가 어떻게 되는지 충분히 이해한 후 가지고 와봤구요, 확실히 위의 코드보다는 조금더 체계적이고 구조적인 것 같긴 합니다. 하지만 클라이언트에 한 번에 보여지는 슬라이드의 개수가 변할 때 AllSlides의 값을 바꿔줘야 하기 때문에 아쉬운 코드인 것 같긴 합니다.

```jsx

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const cardRef = useRef(null);

  const AllSlides = props.products.length-4;
  
  const NextSlide = () => {
    if (currentSlide >= AllSlides) {
      setCurrentSlide(0); 
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    };

    const PrevSlide = () => {
      if (currentSlide === 0) {
        setCurrentSlide(AllSlides); 
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    };
  
    useEffect(() => {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(${-19.7*(currentSlide)}vw)`; 
    }, [currentSlide]);
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
    return state
  }else{
  return state
  }
}
```

 

## SCSS

 최대한 디자인은 스스로 해보려고 노력했습니다. SCSS를 적응해가는 과정이지만 nesting 문법이 편해 사용해보았습니다. 반응형을 만들때도 훨씬 편하게 사용가능해서 좋았습니다.

## 서버와 배포

 아직 서버를 연결하지 못한 상태이지만, 깃헙을 통해 할 수 있는무료 배포를 사용해보았습니다. 

[일상소품](http://contentlee.github.io)