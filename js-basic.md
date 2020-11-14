# Java Script Basic Grammer
> <small>빠르게 요약만 하기</small>

### ES6 (ES2015)
ECMAScript6
2015년도에 도입된 자바스크립트 버전

<br>
<br>

### 변수와 상수
##### 변수 : 바뀔 수 있는 값
```javascript
let 변수명 =  변수값;
```

##### 상수 : 바뀌지 않는 값 (고정적)
```javascript
const 상수명 = 상수값;
```
*한 번 상수를 선언했을 시 다시 값을 변경할 수 없다*

>let, const는 IE9, IE10 같이 이전 버전에서는 사용이 불가능하다.
그렇기 때문에 Babel같은 도구를 이용해 ES6를 ES5로 변환해 작동시킨다.
<br>

### 데이터 타입

변수와 상수를 선언할 때, 들어갈 수 있는 데이터 타입은 무엇이 있을까?
- 숫자 Number
- 문자열 String
- 논리자료형(참/거짓) Boolean
- null  **"값이 없다"**
- undefined **"값이 정의되지 않았다"**
<br>

### 연산자

- ##### 산술 연산자
    사칙연산 작업을 하는 연산자
    `+` `-` `*` `/`
- ##### 대입 연산자
    특정 값에 연산한 값을 설정해주는 연산자
    `=`
- ##### 논리 연산자
    boolean 타입을 위한 연산자
    `!`(NOT) `&&`(AND) `||`(OR)
    <u>*논리 연산자의 연산 순서?*</u> : NOT -> AND -> OR
- ##### 비교 연산자
    두 값을 비교하는 연산자
    `===` `!==` `>` `<`
    <br>
    ```
    == 과 === 의 차이?

    == 은 값이 같은지를 검사하며 
    (number)1 == (String)'1'   -> true
    
    === 은 값과 타입까지 같은지를 확인해준다
    (number)1 == (String)'1'   -> false
    ```
<br>

### 조건문

- ##### if문
    특정 **조건을 만족**했을 때 필요한 코드를 실행할 수 있다
    ```javascript
    if ( 조건 ){
        실행 코드;
    } else if ( 다른 조건 ){
        실행 코드;
    } else {
        나머지 조건 실행 코드;
    }
    ```
- ##### switch
    특정**값이 무엇**이냐에 따라 필요한 코드를 실행할 수 있다
    ```javascript
    switch (특정 값){
        case '값1':
            실행 코드;
            break;
        case '값2':
            실행 코드;
            break;
        default:
            나머지 실행 코드;
    }
    ```
<br>

### 함수
특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능
```javascript
function 함수명(){
    실행할 코드;
}
```
##### \*화살표 함수\*
```javascript
const 대입할 변수 = (매개변수, 매개변수) => {
    실행 코드;
}
```

### 객체
```javascript
// 선언
const 객체명 = {
    객체특징1 : '특징 내용 1',
    `객체 특징 2` : '특징 내용 2'
    // key : value
    // key에는 공백이 없어야하며 공백이 필요할 땐 따옴표로 감싸줌
}

// 값 확인
console.log(객체명.객체특징1);      // 특징 내용 1 반환
```
<br>

- ##### \* 객체 비구조화 할당, 구조 분해 \*
    - Destructuring assignment
    - 배열이나 객체 안의 값을 편하게 꺼내올 수 있는 표현식
    - [training code](destructuring-assignment.js) --> `not complete`

- ##### 객체 내 함수
    ```javascript
    // 선언
    const 객체명 = {
        객체특징1 : '특징 내용 1',
        객체함수 : function 함수() {
            // this = 자신이 속해있는 객체
            console.log(this.객체특징1);
        }
    }

    // 값 확인
    console.log(객체명.객체함수);      // 특징 내용 1 반환
    ```

- ##### 객체의 Getter & Setter
    - 접근자 프로퍼티 : 본질은 함수이며 함수에서 값을 get/set하는 역할 담당
    [참고](https://ko.javascript.info/property-accessors)


<br>

### 배열
[training-code](array.js)

<br>

### 반복문
특정 작업을 반복적으로 할 때 사용
- ##### for문
    특정 값에 변화를 주어가면서 정해진 조건에 만족될 때까지 반복  
    ```javascript
    for(초기값; 조건문; 변화문){
        실행 코드;
    }
    ```
- ##### while
    특정 조건이 `true`일 때까지 반복
    ```javascript
    while(조건){
        실행 코드;
    }
    ``` 
- ##### for ... of
    배열에 특화된 반복문
    ```javascript
    let arr = [1,2,3];
    for(let num of arr){        // arr의 값 개수만큼
        console.log(num);
    }
    ```
- ##### for ... in
    객체를 위한 반복문
    [이어 쓰기](learnjs.vlpt.us)