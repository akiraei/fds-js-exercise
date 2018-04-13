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




function reverser(t) {
  let n = t.length;
  let n2 = [];
  for (let i = 0; i < n; i++) {
    n2[n-1-i] = t[i];
  } 
  return n2;
}




function palin (s) {
  let count = 0;
  let s2 = str_arr(byebye(s));
  let s3 = reverser(s2)
  // console.log("s2",s2,"s3",s3)
  for (let i = 0; i < s2.length; i++ ){
    if ( s2[i] !== s3[i]) {
      count += 1;
    }
  }
  // console.log("get out check")
  if (count === 0) {
    return "Palindrome"
  } else {
    return "no Palindrome"
  }
}



palin ("never")



//아래는 강사의 해답. 아름답다. 오오 전문가

function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length/2); i++) {
    if (str[i] !== str[str.length-1-i]){
      return false;
    }
  }
  return true;
}


// 아래는 강사의 해답2. 극강의 뷰티

function isPalindrome2(str) {
  return [...str].reverse().join("") === str;
}











// ### 문제 6

// 문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.

// 예:
// ```
// subString('햄버거');
// // 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']
// ```


let str = "햄버거";



function bi_list (str) {
  let bis_list = [];
  let len = str.length;
  let len_bi = 2**(len);
  for(let i = 1; i < len_bi; i++) {
    let str_bi = i.toString(2);
    str_bi = "0".repeat(len - str_bi.length) + str_bi
    bis_list.push(str_bi);
  }
  return bis_list;
}



function binary (str) {
  let str_list = [];
  let tech = bi_list(str);
  let len = str.length;
  for (let j = 0; j < tech.length; j++) {
    let str_sum = "";
    for (let i = 0; i < len; i++) {    
      str_sum = str_sum + str[i].repeat(parseInt(tech[j][i]));
    }
    str_list.push(str_sum);
  }
    return str_list;
  }




binary(str);


// 상위의 내가 만든 것은 "부분문자열"이 아니구나.... 망


let str = "햄버거";


function slice_str (str) {
  let arr = [];
  for (let i = 0; i < str.length; i++){
    for (let j = i+1; j  < str.length + 1; j++){
      arr.push(str.slice(i,j));
    }
  }
return arr;
}

slice_str(str)

// substring, substr 이게 뭐지?









// ### 문제 7

// 문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.

// 예:
// ```
// removeDuplicates('tomato'); -> 'toma'
// removeDuplicates('bartender'); -> 'bartend'
// ```


function str_arr (s) {
  let l = [];
  for (let i = 0; i < s.length; i++){
    l[i] = s[i]
  }
  return l;
}



function rmdu (str) {
  let arr = str_arr(str);
  let arr_new = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      // console.log("undefined",arr[i]);
      obj[arr[i]] = 1;
      arr_new.push(arr[i]);
    }
  }
  return arr_new.join("");
}

rmdu("tomato");


// 난 왜 include를 쓰지 않았는가....

function removeDuplicates(str) {
  let newStr = '';
  for (let i =0; i < str.length; i++){
    if(!newStr.includes(str[i])){
      newStr += str[i];
    }
  }
  return newStr;
}

removeDuplicates('tomato');








// ### 문제 8

// 이메일 주소를 입력받아, 아이디 부분을 별표(`*`)로 가린 새 문자열을 반환하는 함수를 작성하세요.

// - 루프로 먼저 풀어보세요.
// - `split` 메소드를 이용해서 풀어보세요.



// 1. @ 가 나오면 루프 종료. ARR에 저장했다가 다시 출력
// 2. 스플릿으로 @로 나눔. 다시 조합 출력


function secureEmail(email) {
  let atPos;
  for (let i = 0; i < email.length; i++){
    if (email[i]==="@"){
      atPos = i;
      break;
    }
  }
  const afterAt = email.slice(atPos, email.length);
  const stars = "*".repeat(atPos);
  return stars + afterAt;
}


secureEmail("akiraei@photo.com")















// ### 문제 9

// 문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.


// 대소문자 확인 함수 만들고 
// 대소문자 확인해서  바꾼다음 
// 어레이에 저장해서 조합







// ### 문제 10

// 문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)


// 스플릿으로 나누어서 어레이에 저장
// 각각의 엘리먼트 변환해서 다시 저장.
// 조인으로 조합










// ### 문제 11

// 문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)


// 스플릿으로 나누어서 어레이에 저장
// 각각에 길이 중 제일 큰거 비교 해서 출력


let str = "수취확인이 완료된 주문은 진행중인 주문에 포함되지 않으며 진행상태에 따라 배송지 변경, 취소, 교환, 반품신청이 가능합니다."

function clearing (x) {
  let str = "";
  for (let i = 0; i < x.length; i++){

  
  switch (x[i]){
    case ":":
    case ";":
    case ".":
    case ",":
    case "?":
    case "!":
    case "\"":
    case "\'":
    case "\`":
    case "(":
    case ")":
    case "{":
    case "[":
    case "]":
    case "<":
    case ">":
    case "|":
          break;
    default :
    str = str + x[i];


  }}

  return str;

}


clearing (str);


function max_word_length (x) {
  let arr = clearing(x).split(" ");
  let max = 0;
  for (let i = 0; i < arr.length; i++){
    if( arr[i].length > max) {
      max = arr[i].length;
    }
  }
return max;  
}




max_word_length(str);








// ### 문제 12

// 문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.



// 루프를 n까지만 가져간뒤
// sum += element로 저장.
// 혹은 그냥 slice로...
// 왜 굳이 map join으로....

function returny (s, n) {
  let sum ="";
for (let i =0 ; i < n; i++){
  sum += s[i];
}
return sum;
}


returny ("abcdefg", 4)












// ### 문제 13

// Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.


// 대소문자 확인 함수로 조건문 만들어서 조합
// Switch case를 해도 될 듯. 죄다 if 로 하는 것 보다



function camelst (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++){
    if ( s[i].toUpperCase() === s[i] && s[i].toUpperCase() !== s[i].toLowerCase()) {
      count++;
    }
  }
  if (count !== 0) {
    return 3
  } else { return 1}
}

function snakest (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++){
    if ( s[i] === "_") {
      count++;
    }
  }
  if (count !== 0) {
    return 2
  } else { return 1}
}


function cameler (s) {
  let sum = "";
  for (let i = 0; i < s.length; i++){
    if (s[i] === "_"){
      sum += s[i+1].toUpperCase();
      i++;
    } else {
      sum += s[i];
    }
  }
  return sum;
}


function snaker (s) {
  let sum = "";
  for (let i = 0; i < s.length; i++){
    if ( s[i].toUpperCase() === s[i]){
      sum = sum + "_" + s[i].toLowerCase();
    } else {
      sum += s[i];
    }
  }
  return sum;
}


function transy (s) {
  let answer;
  let count = camelst(s) * snakest(s);
  switch (count) {
    case 2: 
    answer = cameler(s);
    break;
    case 3:
    answer = snaker(s);
    break;
    case 6:
    answer = "why are you doing that?"
    break;
    case 1:
    answer = s;
    break;
    default:
    answer = s;
    break;
  }
  return answer;
  }


  let str = "toUpperCase"
  let str2 = "to_snake_case"
  
  console.log(camelst (str))
  console.log(cameler (str))
  console.log(snakest (str))
  console.log(snaker (str))
  console.log(transy (str))
  console.log(transy (str2))




//------------------------------------------------

function transy (s) {
  let answer = "";
  for (let i = 0; i < s.length; i++){

    switch (true) {
      case (s[i].toUpperCase() === s[i] && s[i].toUpperCase() !== s[i].toLowerCase()): 
      answer += "_" + s[i].toLowerCase();
      break;
      case (s[i] === "_"):
      answer += s[i+1].toUpperCase(); i++;
      break;
      default:
      answer += s[i];
      break;
    }
  }
    return answer;
  }
  

  let str = "toUpperCase"
  let str2 = "to_snake_case"

  console.log(transy (str))
  console.log(transy (str2))

// 더 짧게 만든 버젼






// ### 문제 14

// Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

// "_" 걸러내는 조건문 만들어서 조합








// ### 문제 15

// `String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

// 예:
// ```
// split('Hello World'); -> ['Hello World']
// split('Hello World', ' '); -> ['Hello', 'World']
// split('let,const,var', ',') -> ['let', 'const', 'var']
// ```



function find_location (x, y) {
  let arr= [];
  for (let i = 0; i < x.length; i++){
    if ( x[i] === y) {
      arr.push(i);
        }
  }
  arr.push(x.length)
return arr;
}


function str_split (x, y) {
  if (y === undefined){
    return x;
  } else {
  let arr = [];
  let arr_y = find_location(x,y);
  console.log(arr_y)
  for (let i = 1; i< arr_y.length; i++){
    console.log("i",i)
    if( i === 1){ //y가 undefined는 아니지만 x안에는 없는 경우를 위해서 이러한 경우를 지정해 주는 것이 필요 한듯.
      arr.push(x.slice(arr_y[i-1],arr_y[i]))
    } else {arr.push(x.slice(arr_y[i-1]+1,arr_y[i])) }
    
  }
  return arr;
}}




str_split ('let,const,var', ',')


// ------------------------------------------------

function collector (x, y) {
  let arr = [];
  let str = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i+1] === y || x[i+1] === undefined) {
      str += x[i];
      arr.push(str);
      str = "";
    } else { str += x[i]
      }
  }
  return arr;
}

collector ('let,const,var', ',')

// 위는 나의 해답. 이것이 더 짧다.





// ### 문제 16

// 2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

// 예:
// ```
// convertBinary('1101'); -> 13
// ```






function decimal (arr) {
  let sum =0;
  for (let i = 0; i < arr.length; i ++){
    sum = sum + arr[i] * (2 ** (arr.length - 1 - i));
  }
  return sum;
}

decimal ('1101')










// ### 문제 17

// 숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

// 예:
// ```
// insertHyphen('437027423'); -> '4370-274-23'
// ```


function find_location_n (x) {
  let arr= [];
  for (let i = 0; i < x.length; i++){
    if ( x[i]%2 === 0) {
      arr.push(i);
        }
  }
  arr.push(x.length)
return arr;
}

find_location_n('437027423')


function insert_hyphen (x) {
  let sum = "";
  let position = find_location_n(x);
  let t = Math.floor(position.length/2);
  for (let i = 0; i < t; i++){
    if( i === t - 1 ){
      sum += x.slice(position[2*i], x.length)
    } else { sum  =  sum + x.slice(position[2*i],position[2*i+1]+1) + "-"}
  }
  return sum;
}

insert_hyphen ('437027423')