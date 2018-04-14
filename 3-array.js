// ### 문제 1

// 두 정수 `start`, `end`를 입력받아, `start`부터 `end`까지의 모든 정수를 배열로 반환하는 함수를 작성하세요.

// 예:
// ```
// range(3, 6); -> [3, 4, 5, 6]
// ```


// 루프로 만들면 된다! 루프와 푸시


function arraying (s,e) {
  let arr = [];
  for (let i = s; i < e+1; i++){
    arr.push(i);
  }
  return arr;
}






// ### 문제 2

// 수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 합을 구하는 함수를 작성하세요.


// 루프
let arr = [1,2,3];
let k = arr => arr.reduce((x,y) => x+y, 0)
k(arr)






// ### 문제 3

// 배열을 입력받아, falsy인 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.


// 루프 조건 푸시

let arr = [1, 2, 3, null, false, NaN]
let k = arr => arr.filter(item => Boolean(item) === true)
k(arr)




// ### 문제 4

// 배열을 입력받아, 중복된 요소가 제거된 새 배열을 반환하는 함수를 작성하세요.


let arr = [1,1,2,2,3,3,4,4,5,5]


let k = arr => arr.filter((item,index,array) => {
  let count = 0;


for ( let i = 0; i < index; i++){
if (item === array[i]) {
  count = 1
}
}



if ( count === 0) {
  return true;
} else {return false;}

})


k(arr)

// 2중 루프?









// ### 문제 5

// 수 타입의 값으로만 이루어진 두 배열을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
// - 두 배열의 같은 자리에 있는 요소를 더한 결과가 새 배열의 요소가 됩니다.
// - 만약 입력받은 두 배열의 길이가 갖지 않다면, 긴 배열에 있는 요소를 새 배열의 같은 위치에 포함시키세요.

// 예:
// ```
// addArray([1, 2, 3], [4, 5, 6, 7]) -> [5, 7, 9, 7]
// ```


// 루프 조건 푸시














// ### 문제 6

// 배열을 입력받아, 배열의 요소 중 두 개를 선택하는 조합을 모두 포함하는 배열을 작성하세요.

// 예:
// ```
// combination([1, 2, 3]); -> [[1, 2], [1, 3], [2, 3]]
// ```


// 햄버거 문제
// let str = "햄버거";



// function bi_list (str) {
//   let bis_list = [];
//   let len = str.length;
//   let len_bi = 2**(len);
//   for(let i = 1; i < len_bi; i++) {
//     let str_bi = i.toString(2);
//     str_bi = "0".repeat(len - str_bi.length) + str_bi
//     bis_list.push(str_bi);
//   }
//   return bis_list;
// }



// function binary (str) {
//   let str_list = [];
//   let tech = bi_list(str);
//   let len = str.length;
//   for (let j = 0; j < tech.length; j++) {
//     let str_sum = "";
//     for (let i = 0; i < len; i++) {    
//       str_sum = str_sum + str[i].repeat(parseInt(tech[j][i]));
//     }
//     str_list.push(str_sum);
//   }
//     return str_list;
//   }




// binary(str);








// ### 문제 7

// '금액'과 '동전의 종류가 들어있는 배열'를 입력받아, 최소한의 동전을 사용해서 금액을 맞출 수 있는 방법을 출력하는 함수를 작성하세요.
// (단, 동전의 종류가 들어있는 배열에는 큰 동전부터 순서대로 들어있다고 가정합니다.)

// 예:
// ```
// coins(263, [100, 50, 10, 5, 1]);
// // 출력
// 100
// 50
// 10
// 1
// 1
// 1
// ```

// 루프 조건 큰 순서대로  출력은 오브젝트?


function big_small (x, y) {
  let max = 0;
  for (let i = 0; i < y.length; i++){
    if(x > y[i]){
      max = y[i]
      return max;
    }
  }
}

function arr2obj (y) {
  let obj = {};
  for (let i = 0; i < y.lenght; i++){
    obj[y[i]] = 0;
  }
  return obj
}

function getcha (x, y) {
  let set = arr2obj(y);
  let huddle = 0;
  let rest = x;
  while(rest === 0) {
    huddle = big_small (rest, y);
    rest -+ huddle;
    set[huddle] += 1;
  }
  return set;
}



let arr = [100, 50, 10, 5, 1];
let value = 263;

console.log(big_small (value, arr))
console.log(arr2obj (arr))
console.log(getcha(value,arr))













// ### 문제 8

// 수 타입의 값만 들어있는 배열을 입력받아, 해당 배열을 오름차순 정렬하는 함수를 작성하세요. (`Array.prototype.sort`를 사용하지 않고 작성해보세요. [선택 정렬](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC)을 참고하세요.)


// 숫자 js 의 내림차순 문제의 변형.

// let ls = [1,3,4,6,9,7,11,-3,56,34,2,5,3,453,32,112,5435]

// function compare_list (ls) {
//   let l = ls.length;
//   let t = 0;
//   for (let i = 0; i < l; i++) {
//     if (ls[l-i-1] < ls[l-i]){
//       let buffer = ls[l-i-1];
//       ls[l-i-1] = ls[l-i];
//       ls[l-i] = buffer;
//       t += 1;    
//     } 
//   }
//   console.log("t",t)
//   if (t === 0) {
//     return ls;
//   } else {
//     compare_list(ls);
//   }
//   return ls;
// }

// compare_list(ls);





