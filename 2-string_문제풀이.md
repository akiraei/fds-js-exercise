
### 문제 12

문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.



```js
function returny (s, n) {
  let sum ="";
for (let i =0 ; i < n && i < s.length; i++){
  sum += s[i];
}
return sum;
}


returny ("abcdefg", 4)
```
```js
function firstStr(s,n) {
  return Array
  .from(s)
  .filter((item.index) => index <n)
  .join('');
}

firstStr ("abcdefg", 4)
```
---

### 문제 13

Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

```js
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
```
```js
function camelToSnake(str) {
  let newStr= '';
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i].toUpperCase() && i !== 0) {
      newStr += "_" + str[i].toLowerCase() 
    } else { newStr += str[i].toLowerCase()}
  }
  return newStr;
}
```
```js
function camelToSnake(str) {
  return str.replace(/([A-Z])/g, match => '_' + match[0].toLowerCase());
}
```

---

### 문제 14

Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.


```js
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
```


---


### 문제 13 + 14
camel은 snake로, snake는 camel로


```js
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
  ```




---


### 문제 15

`String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

예:
```
split('Hello World'); -> ['Hello World']
split('Hello World', ' '); -> ['Hello', 'World']
split('let,const,var', ',') -> ['let', 'const', 'var']
```

```js
function collector (x, y) {
  let arr = [];
  let str = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y) {
      arr.push(str);
      str = "";
    } else if (i === x.length - 1 ){
      str += x[i]
      arr.push(str)
    }
    else { str += x[i]
      }
  }
  return arr;
}

collector ('let,const,var', ',')
```


---

### 문제 16

2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

예:
```
convertBinary('1101'); -> 13
```

```js
function decimal (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i ++){
    sum = sum + arr[i] * (2 ** (arr.length - 1 - i));
  }
  return sum;
}

decimal ('1101')
```