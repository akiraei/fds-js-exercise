//number

//### 문제 1
//두 수를 입력받아 큰 수를 반환하는 함수를 작성하세요. 


function larger (x,y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log(larger(100,1));


// ## 문제 2

// 세 수를 입력받아 그 곱이 양수이면 `true`, 0 혹은 음수이면 `false`, 둘 다 아니면 에러를 발생시키는 함수를 작성하세요.

// 에러를 발생시키는 코드는 다음과 같습니다.

// ```js
// throw new Error('입력값이 잘못되었습니다.');
// ```


function lamb (x,y,z) {
  let n = x * y * z;
  if (n > 0) {
    return true;
  } else if (n <= 0) {
    return false;
  } else {
    throw new Error('입력값이 잘못되었습니다.');
  };
};

console.log(lamb (1,1,1));
console.log(lamb (1,-1,1));
// console.log(lamb (1,1,"b"));




// ### 문제 3

// 세 수 `min`, `max`, `input`을 입력받아, 다음과 같이 동작하는 함수를 작성하세요.
// - `min`보다 `input`이 작으면, `min`을 반환합니다.
// - `max`보다 `input`이 크면, `max`를 반환합니다.
// - 아니면 `input`을 반환합니다.

// 예:
// ```
// limit(3, 7, 5); -> 5
// limit(3, 7, 11); -> 7
// limit(3, 7, 0); -> 3
// ```


function limit (min, max, input) {
  if ( min < input ){
    return min;
  } else if ( max < input ){
    return max;
  } else {
    return input;
  }
}

console.log(limit(3, 7, 5)); 
console.log(limit(3, 7, 11)); 
console.log(limit(3, 7, 0)); 



//이근환
function limit(min, max, input) {
 switch(true) {
   case min>input :
     console.log(min);
     break;
   case max<input :
     console.log(max);
     break;
   default :
     return input;
 }
}

limit(3,7,5);






// ### 문제 4

// 어떤 정수가 짝수인지 홀수인지 출력하는 함수를 작성하세요. 이를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 프로그램을 작성하세요.


function odd_even (n) {
  if (n % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}


function list_odd_even () {
  let num_list = [];
  for (let i = 0; i < 20; i++) {
    num_list[i] = [i+1, odd_even(i+1)];
    console.log("가나다%{i}입니다.");
  }
  return num_list;
}

console.log(list_odd_even());






// ### 문제 5

// 100 이하의 자연수 중 3과 5의 공배수를 모두 출력하는 프로그램을 작성하세요.

function finder () {
  let list = [];
  for (let i = 1; i < 101; i ++) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
      list.push(i);
    }
  }

  return list;
}

console.log(finder());











// ### 문제 6

// 자연수를 입력받아, 그 수의 모든 약수를 출력하는 함수를 작성하세요.


function destructor (n) {
  let list = [];
  for (let i = 1; i < n+1; i++) {
    if (n % i === 0) {
      list.push(i);
    }
  }
  return list;
}

console.log(destructor(240));









// ### 문제 7

// 2 이상의 자연수를 입력받아, 그 수가 소수인지 아닌지를 판별하는 함수를 작성하세요.

let prime_list = [2];
const l = prime_list.length


function prime (x) {
  let t = 0;
  if( x <= 2 || Math.floor(x) != x ){
    if (x == 2) {
      return "prime"
    } else{return "wrong input";}
      } else {

    // console.log("right input");
    for (let i = 0; i < l; i++) {
      let n = x % prime_list[i];
      if (n === 0 ) {
        return "no prime"
      }
     }
    //  console.log("out list, enter wild")
     for (let j = prime_list[l]; j < x; j++){
          // console.log("after for, begin wild");
          let k = x % j;
          if (k === 0 ) {
            return "no prime";
          }}
     prime_list.push(x);
     console.log(prime_list);
     return "prime";
  }
}

 function prime_collector (x) {
   prime_list = [2];
   for (let i = 3; i < x; i++) {
     prime (i);
   }
 }
  
  




// ### 문제 8

// 1부터 100까지의 수를 차례대로 출력하되, 자릿수에 3, 6, 9중 하나라도 포함되어 있으면 '짝!'을 대신 출력하는 프로그램을 작성하세요.

let list_369 = [];

function check_369 (x) {
for (let i = 1; i < x+1; i++) {
  let str = i.toString();
  if( str.includes('3') || str.includes('6')  || str.includes('9') ) {
    list_369.push("짝");
  } else { list_369.push(i)}
}
return list_369;
}







// ### 문제 9

// 양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

// 1을 입력받은 경우:
// ```
// *
// ```

// 3을 입력받은 경우:
// ```
// *
// * *
// * * *
// ```

// 5를 입력받은 경우:
// ```
// *
// * *
// * * *
// * * * *
// * * * * *
// ```



function piramid (x) {
  let str = "\n";
  for (let i = 1; i < x + 1; i++) {
    let str_2 = "*".repeat(i)+"\n";
    str = str + str_2
  }
  return str;
}













// ### 문제 10

// 양의 정수를 입력받아, 다음과 같은 패턴의 출력을 하는 함수를 작성하세요.

// 1를 입력받은 경우:
// ```
// *
// ```

// 3를 입력받은 경우:
// ```
//   *
// * *
// * * *
// * *
//   *
// ```

// 5를 입력받은 경우:
// ```
//     *
//   * *
//   * * *
// * * * *
// * * * * *
// * * * *
//   * * *
//   * *
//     *
// ```







// ### 문제 11

// 두 수를 입력받아서, 두 수의 최대공약수를 반환하는 함수를 작성하세요. ([유클리드 호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)을 참고하세요.)












// ### 문제 12

// 세 수를 입력받아 큰 것부터 차례대로 출력하는 함수를 작성하세요.


let ls = [1,3,4,6,9,7,11,-3,56,34,2,5,3,453,32,112,5435]

function compare_list (ls) {
  let l = ls.length;
  let t = 0;
  for (let i = 0; i < l; i++) {
    if (ls[l-i-1] < ls[l-i]){
      let buffer = ls[l-i-1];
      ls[l-i-1] = ls[l-i];
      ls[l-i] = buffer;
      t += 1;    
    } 
  }
  console.log("t",t)
  if (t === 0) {
    return ls;
  } else {
    compare_list(ls);
  }
  return ls;
}

compare_list(ls);








// ### 문제 13

// 자연수 `n`을 입력받아, `n`번째 피보나치 수를 반환하는 함수를 작성하세요.


function pipi (n) {

  let list = [1,1]
  for (let i = 0; i < n -2; i++){
    list[i+2] = list [i+1] + list[i]
  }
  return list[list.length-1]
}

pipi (99)

// 내 풀이. 지저분 하다. 죽것음


function fibonacci(num) { 
  if(num < 2) return num;
   return fibonacci(num-1) + fibonacci(num-2); }

 //  남의 재귀함수 풀이. 겁나 아름답다.