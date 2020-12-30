# Java Script Promise

> <small> * [참고](https://learnjs.vlpt.us/async/)</small>
>
> <small>[Promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)</small>

### Promise 🧲

비동기적으로 처리해야 할 일이 많아질수록, 코드의 깊이가 계속 깊어지는 현상을 방지

JavaScript의 엔진은 Single Thread로 동시 작업이 불가능하기 때문에 **비동기 처리**를 지원

> ##### 사용 사례
>
> 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용

<br>

##### Promise 기본 틀

- 성공 : resolve 호출
- 실패 : reject 호출

```javascript
const testPromise = new Promise((resolve, reject) => {
    // 프로미스 기본 틀
    
    // resolve(tempValue); 		- 성공적 완료
    // or
    // reject("fail");			- 실패 오류 원인 반환
});

// example
const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('성공 결과');
        // or
        // reject(new Error());
    }, 1000);
});

// promise가 끝나고 이어서 진행할 작업
testPromise.then(result => {
    console.log(result);
}).catch(e => {
    console.error(e);
});
```



##### Promise의 3가지 상태

- pending(대기) : 비동기 처리 로직이 아직 완료되지 않음

- fulfilled(이행) : 비동기 처리가 완료 후, 프로미스가 결과값을 반환

- rejected(실패) : 비동기 처리가 실패 또는 오류




---



#### Promise를 이용한 코드 개선

1. `increaseAndPrint()` 메소드를 5번 반복하고 싶다

   ```javascript
   // 1초 뒤에 n이 1 증가하는 함수
   function increaseAndPrint(n, callback){
       setTimeout(() => {
           const increased = n+1;
           console.log(increased);
           if(callback){
               callback(increased);
           }
       }, 1000);
   }
   
   // 함수를 5번 반복하는 방법
   increaseAndPrint(0, n => {
       increaseAndPrint(n, n => {
           increaseAndPrint(n, n => {
               increaseAndPrint(n, n => {
                   increaseAndPrint(n, n => {
                       console.log("end");		// 코드의 깊이가 반복할 만큼 깊어진다..
                   });
               });
           });
       });
   });
   ```

   <br>

2. Promise를 사용한 `increaseAndPrint()` 메소드 5번 반복

   ``` javascript
   function increaseAndPrint(n){
       return new Promise((resolve, reject) =>{
           setTimeout(() =>{
               const value = n + 1;
               if(value ===  5){		// 5번째 반복일때 error 발생
                   const error = new Error();
                   error.name = 'ERROR::ValueIsFive';
                   reject(error);		
                   return;
               }
               console.log(value);
               resolve(value);
           }, 1000);
       });
   }
   
   
   increaseAndPrint(0).then(n => {
       return increaseAndPrint(n);
   }).then(n => {
       return increaseAndPrint(n);
   }).then(n => {
       return increaseAndPrint(n);
   }).then(n => {
       return increaseAndPrint(n);
   }).then(n => {
       return increaseAndPrint(n);
   }).catch(e => {
       console.error(e);
   });
   ```

   :bulb: ***코드의 깊이가 깊어지지 않는다.***

   <br>

3. Promise 코드 단축

   ```javascript
   function increaseAndPrint(n){
       return new Promise((resolve, reject) =>{
           setTimeout(() =>{
               const value = n + 1;
               if(value ===  5){
                   const error = new Error();
                   error.name = 'ERROR::ValueIsFive';
                   reject(error);
                   return;
               }
               console.log(value);
               resolve(value);
           }, 1000);
       });
   }
   
   increaseAndPrint(0)
   .then(increaseAndPrint)
   .then(increaseAndPrint)
   .then(increaseAndPrint)
   .then(increaseAndPrint)
   .catch(e => {
       console.error(e);
   });
   ```

   

##### Promise의 특징 

- ###### 장점

  - 비동기 작업의 작업이 많아져도 **코드의 깊이가 깊어지지 않는다**

- ###### 단점

  - **에러가 발생한 위치**를 찾아내기 힘들다
  - 결과에 따른 **분기 처리**가 힘들다



> **Promise**의 단점을 개선하기 위해 `async` & `await` 등장