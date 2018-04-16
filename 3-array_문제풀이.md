

### 문제 3

배열을 입력받아, falsy인 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.

```js
let arr = [1, 2, 3, null, false, NaN]
let k = arr => arr.filter(item => Boolean(item) === true)
k(arr)
```
```js
let arr = [1, 2, 3, null, false, NaN]
let k = arr => arr.filter(item => item) //강사의 수정. 호오...?!
k(arr)
```
```js
function k(arr) {
  return arr.filter(item => item); // 강사의 재수정. 함수화.
}
```



---

### 문제 4

배열을 입력받아, 중복된 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.


```js
let arr = [1,1,2,2,3,3,4,4,5,5]

let k = arr => arr.filter((item,index,array) => {
  let count = 0;
for ( let i = 0; i < index; i++){
if (item === array[i]) {
  count = 1
}}
if ( count === 0) {
  return true;
} else {return false;}
})

k(arr)
```


---

### 문제 7

'금액'과 '동전의 종류가 들어있는 배열'를 입력받아, 최소한의 동전을 사용해서 금액을 맞출 수 있는 방법을 출력하는 함수를 작성하세요.
(단, 동전의 종류가 들어있는 배열에는 큰 동전부터 순서대로 들어있다고 가정합니다.)

예:
```
coins(263, [100, 50, 10, 5, 1]);
// 출력
100
50
10
1
1
1
```

```js
function big_small (x, y) {
  let max = 0;
  for (let i = 0; i < y.length; i++){
    if(x >= y[i]){
      max = y[i]
      return max;
    }
  }
}

function arr2obj (y) {
  let obj = {};
  for (let i = 0; i < y.length; i++){
    obj[y[i]] = 0;
  }
  return obj
}

function getcha (x, y) {
  let set = arr2obj(y);
  let huddle = 0;
  let rest = x;
  while(rest > 0) {
    huddle = big_small (rest, y);
    rest -= huddle;
    set[huddle] += 1;
  }
  return set;
}


let arr = [100, 50, 10, 5, 1];
let value = 263;


console.log(getcha(value,arr))
```
```js
function getcha (x, y) { // 강사의 solution을 보고 재수정
  let set = {};
  let huddle = 0;
  let rest = x;
  let i = 0;
  while(rest > 0) {
    if (rest - y[i] >= 0){
      rest -= y[i];
      if (set[y[i]]){
        set[y[i]] += 1;
      } else {
        set[y[i]] = 1;
      }  
    } else {
      i++;
    }
  }
  return set;
}

let arr = [100, 50, 10, 5, 1];
let value = 263;


console.log(getcha(value,arr)) 
```