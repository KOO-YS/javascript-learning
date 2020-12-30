# Java Script Basic Grammer
> <small>빠르게 요약만 하기</small> 
>
> <small> * [참고](https://learnjs.vlpt.us/)</small>

### ES6 (ES2015) 🧲
ECMAScript6
2015년도에 도입된 자바스크립트 버전

<br>
<br>

### 변수와 상수 🧲
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

<br>



### 데이터 타입 🧲

변수와 상수를 선언할 때, 들어갈 수 있는 데이터 타입은 무엇이 있을까?
- 숫자 Number
- 문자열 String
- 논리자료형(참/거짓) Boolean
- null  **"값이 없다"**
- undefined **"값이 정의되지 않았다"**

<br>



### 연산자 🧲

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
    
    

### 조건문 🧲

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
    
    

### 함수 🧲
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

<br>



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
    - [training code](js-basic/destructuring-assignment.js) --> `not complete`

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



### 배열 🧲
[training-code](source-code/array.js)

<br>

### 반복문 🧲
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
    **배열**에 특화된 반복문
    
    ```javascript
    let arr = [1,2,3];
    for(let num of arr){        // arr의 값 개수만큼
        console.log(num);
    }
    ```
- ##### for ... in
    **객체**를 위한 반복문
    
    ```javascript
    const object1 = {
        name : 'obj',
        number : 2
    }
    Object.entries(object1);  		// [["name", "obj"], ["number",2]]
    Object.keys(Object1);			// ["name", "number"]
    Object.values(Object1);			// ["obj", 2]
    
    for(let key in object1) {
        console.log(`${key} : ${object1[key]}`);
    }
    ```

<br>



### 배열 내장 함수 🧲

- ##### forEach

  - for문의 간편 대체

  ```javascript
  const nums = ['one', 'two', 'three', 'four'];
  
  nums.forEach(i => {
  	console.log(i);
  })
  ```

- ##### map

  - 배열 안의 각 원소를 변환 할 때 사용. 새로운 배열 생성

  - [training-code](source-code/map.js)

    ```javascript
    const arr = [1,2,3,4,5,6,7,8,9];
    
    const rule = i => i*i;      // -> 변화함수
    const squard3 = arr.map(rule);
    
    console.log("3 : ",squard3);
    ```

    > 변화함수 `rule`는 파라미터 i를 받아와 이를 제곱해준다
    > arr.map에 rule 변화함수를 사용하여, arr 내부의 모든 값에 대해 제곱해서 새로운 배열 생성해줌

- ##### indexOf

  - 특정 항목이 몇번째 원소인지 확인

    ```javascript
    const letter = ['a', 'b', 'c', 'd'];
    const index = letter.indexOf('c');
    console.log(index);			// print : 2
    ```

- ##### findIndex

  - 배열 안에 있는 값이 `숫자`, `문자열`, `불린`이 아니라면? `indexOf`로 찾을 수 없다! 

  - 상단 타입 이외의 `객체`, `배열` 등의 원소 타입이라면 `findIndex`를 이용해 찾아야한다

    ```javascript
    const objectArr = [
        {
            id : 1,
            describe : 'first obj',
            result : true
        },
        {
            id : 2,
            describe : 'second obj',
            result : false
        },
        {
            id : 3,
            describe : 'third obj',
            result : true
        }
    ];
    const index = objectArr.findIndex(i => i.id === 1);
    console.log(index);			// print : 0
    ```

- ##### find

  - 찾아낸 값이 몇 번째인지 반환하는 것이 아닌 **찾아낸 값 자체**를 반환

    ```javascript
    const objectArr = [
        {
            id : 1,
            describe : 'first obj',
            result : true
        },
        {
            id : 2,
            describe : 'second obj',
            result : false
        },
        {
            id : 3,
            describe : 'third obj',
            result : true
        }
    ];
    const index = objectArr.find(i => i.id === 1);
    console.log(index);     // print : { id: 1, describe: 'first obj', result: true }
    ```

- ##### filter

  - 배열 내 **특정 조건** 값을 만족하는 객체들만 **따로 추출해 새로운 배열**을 만든다

    ```javascript
    const objectArr = [
        {
            id : 1,
            describe : 'first obj',
            result : true
        },
        {
            id : 2,
            describe : 'second obj',
            result : false
        },
        {
            id : 3,
            describe : 'third obj',
            result : true
        }
    ];
    const filter = objectArr.filter(i => i.result === true);
    // const filter = objectArr.filter(i => i.result); -> true
    console.log(filter);
    // [
    //     { id: 1, describe: 'first obj', result: true },
    //     { id: 3, describe: 'third obj', result: true }
    // ]
    ```

- ##### splice

  - 배열에서 특정 항목을 제거
  - `arr.splice(몇 번째 인덱스부터, 몇 개를 지울지)` 

- ##### slice

  - 기존의 배열을 건드리지 않으면서 잘라내, 새로운 배열로 반환
  - `arr.slice(몇 번째 인덱스부터, 몇 개까지 잘라서 저장)`

- ##### shift

  - 배열 내 첫 번째 원소를 추출 후 삭제

- ##### unshift

  - 배열의 맨 앞에 새 원소를 추가

- ##### pop

  - 배열 내 맨 마지막 항목을 추출 후 삭제

- ##### concat

  - 여러개의 배열을 하나의 배열로 합침

- ##### join

  - 배열 안의 값들을 문자열 형태로 합침
  - `arr.join(원소 사이 구분해 입력할 문자)` -> 구분자가 없다면 , 로 구분해 문자열 합침

- ##### reduce

  - [training-code](source-code/reduce.js)



### 프로토타입과 클래스 🧲

- ##### 객체 생성자 

  - 새로운 객체를 만들고 속성 값을 입력해줄 객체 생성자

- ##### 프로토타입

  - 같은 객체 생성자를 사용하는 경우, 특정 함수 또는 값을 재사용할 수 있도록 한다

    ```javascript
    // 생성자
    function Animal(type, name, sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    // 프로토 타입을 사용해 특정 값 재사용
    Animal.prototype.say = function(){
        console.log(this.sound);
    }
    Animal.prototype.sharedNumber = 100;
    
    const dog = new Animal('개', '갱얼쥐', '멍멍');
    const cat = new Animal('고양이', '고영희', '냐옹');
    
    dog.say();	// 멍멍
    cat.say();	// 냐옹
    
    console.log(dog.sharedNumber);		// 100
    console.log(cat.sharedNumber);		// 100
    ```

- ##### 객체 생성자 `상속`

  - 

    ```javascript
    // ... 위 코드 이어서
    
    function Puppy(name, sound){
        // 첫번째 파라미터 : this
        // 나머지 파라미터 : 상속받을 객체 생성자에서 필요한 값들
        Animal.call(this, '123456', name, sound);
    }
    // prototype 공유
    Puppy.prototype = Animal.prototype;
    
    const puppy = new Puppy('베이비독', '왕왕');
    puppy.say(); 	// 왕왕
    ```

- 클래스

  - 위 작성 코드를 클래스로 변환해보기

    ```javascript
    // 클래스로 변환
    class Animal{
        constructor(type, name, sound){
            this.type = type;
            this.name = name;
            this.sound = sound;
        }
        say(){
            console.log(this.sound);
        }
    }
    
    const dog = new Animal('개', '갱얼쥐', '멍멍');
    const cat = new Animal('고양이', '고영희', '냐옹');
    
    dog.say();	// 멍멍
    cat.say();	// 냐옹
    
    class Puppy extends Animal{
        constructor(name, sound){
            super('123456', name, sound);
        }
    }
    
    const puppy = new Puppy('베이비독', '왕왕');
    puppy.say();            // 왕왕
    console.log(puppy);     // Puppy { type: '123456', name: '베이비독', sound: '왕왕' }
    ```

    > say 함수가 클래스 내부에 메서드로 선언되며, 메서드는 자동으로 prototype으로 등록이 된다 