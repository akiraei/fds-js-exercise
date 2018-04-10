// ### 문제 1

// 두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

// 예:
// ```
// insensitiveEqual('hello', 'hello'); -> true
// insensitiveEqual('hello', 'Hello'); -> true
// insensitiveEqual('hello', 'world'); -> false
// ```

function insensitiveEqual(a,b) {
  let a1 = a.toLowerCase()
  let b1 = b.toLowerCase()
  if (a1 === b1) {
    return true
  } else {
    return false
  }
  }

  function insensitiveEqual(a,b) {
 return a.toLowerCase() === b.toLowerCase()
    }
 // 강사 정답. 크으 아름답다.   
  
  insensitiveEqual('hello', 'Hello'); 
  






// ### 문제 2

// 문자열 `s`와 자연수 `n`을 입력받아, 만약 `s`의 길이가 `n`보다 작으면 `s`의 왼쪽에 공백으로 추가해서 길이가 `n`이 되게 만든 후 반환하고, 아니면 `s`를 그대로 반환하는 함수를 작성해보세요.

// 예:
// ```
// leftPad('hello', 8); -> '   hello'
// leftPad('hello', 3); -> 'hello'
// ```



















// ### 문제 3

// 문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.



function moum (str) {
  let vowel = ["a","e","i","o","u"]
  let n = 0;
  for (let i = 0; i < str.length; i++ ){
    for (let j = 0; j < vowel.length; j++) {
      if (str[i] === vowel[j]) {
        n += 1
      }


    }
  }
  return n;
}

moum ("javascript")











// ### 문제 4

// 문자열을 입력받아, 해당 문자열에 포함된 문자의 종류와 갯수를 나타내는 객체를 반환하는 함수를 작성하세요.

// 예:
// ```
// countChar('tomato'); -> {t: 2, o: 2, m: 1, a: 1}
// ```


function lister (s) {
  let obj1 = {};
  for (let i = 0; i < s.length ; i++) {
    obj1[s[i]] = 0;
  } 
  return obj1;
}

function cal_list (s) {
  let list = lister(s);
  for (let i in list) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] === i) {
        list[i] += 1;
      }
    }
  }
  return list;
}


cal_list("javascript")









// ### 문제 5

// 문자열을 입력받아 그 문자열이 회문(palindrome)인지 판별하는 함수를 작성하세요. (회문이란, '토마토', 'never odd or even'과 같이 뒤에서부터 읽어도 똑같이 읽히는 문자열을 말합니다.)

function byebye (s) {
  let t = "";
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== " "){
      t = t + s[i];
    }
  }
return t;
}

function str_arr (s) {
  let l = [];
  for (let i = 0; i < s.length; i++){
    l[i] = s[i]
  }
  return l;
}

function palin (s) {
  let count = 0;
  let s2 = str_arr(byebye(s));
  let s4 = new s2
  let s3 = s4.reverse()
  console.log("s2",s2,"s3",s3)
  for (let i = 0; i < s2.length; i++ ){
    if ( s2[i] !== s3[i]) {
      count += 1;
    }
  }
  if (count === 0) {
    return "Palindrome"
  } else {
    "no Palindrome"
  }
}



palin ("never")














// ### 문제 6

// 문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.

// 예:
// ```
// subString('햄버거');
// // 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']
// ```

// ### 문제 7

// 문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.

// 예:
// ```
// removeDuplicates('tomato'); -> 'toma'
// removeDuplicates('bartender'); -> 'bartend'
// ```

// ### 문제 8

// 이메일 주소를 입력받아, 아이디 부분을 별표(`*`)로 가린 새 문자열을 반환하는 함수를 작성하세요.

// - 루프로 먼저 풀어보세요.
// - `split` 메소드를 이용해서 풀어보세요.

// ### 문제 9

// 문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.

// ### 문제 10

// 문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

// ### 문제 11

// 문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

// ### 문제 12

// 문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.

// ### 문제 13

// Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

// ### 문제 14

// Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

// ### 문제 15

// `String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

// 예:
// ```
// split('Hello World'); -> ['Hello World']
// split('Hello World', ' '); -> ['Hello', 'World']
// split('let,const,var', ',') -> ['let', 'const', 'var']
// ```

// ### 문제 16

// 2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

// 예:
// ```
// convertBinary('1101'); -> 13
// ```

// ### 문제 17

// 숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

// 예:
// ```
// insertHyphen('437027423'); -> '4370-274-23'
// ```
