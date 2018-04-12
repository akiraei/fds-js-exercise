// ### 문제 1

// 양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.


// Math.squr...?를 쓰고 싶은 건가. (x/2)**2 하면 끝인데










// ### 문제 2

// 두 정수 `min`, `max` 를 입력받아, `min` 이상 `max` 미만인 임의의 정수를 반환하는 함수를 작성하세요.

// Math.round((max-min)*Math.random()+min)













// ### 문제 3

// 정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.

// 예:
// ```
// ceilBy5(32); -> 35
// ceilBy5(37); -> 40
// ```


// Math.round(x/10)*10







// ### 문제 4

// 배열을 입력받아, 요소들의 순서를 뒤섞은 새 배열을 반환하는 함수를 작성하세요.


// {Math.random(): element}
// [Math.random()}].sort
// 루프 푸시












// ### 문제 5

// 임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.

// "#"+Math.round(Math.random()*(16**6)).toString(16)









// ### 문제 6

// 양수를 입력받아, 그 수만큼의 길이를 갖는 임의의 문자열을 반환하는 함수를 작성하세요.



// sum_str = loop_sigma ( String.fromCharCode(65535*Math.random()) )







// ### 문제 7

// 수 타입의 값으로만 이루어진 배열을 입력받아, 그 값들의 표준편차를 구하는 함수를 작성하세요.



// average
// mean 과 average 의 차이 
// https://m.blog.naver.com/PostView.nhn?blogId=sw4r&logNo=221010499304&targetKeyword=&targetRecommendationCode=1&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F
//  sd = Math.squr( (loop_sigma: element**2-average)/array.length )