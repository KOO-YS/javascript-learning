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
```



##### Promise의 3가지 상태

- pending(대기) : 비동기 처리 로직이 아직 완료되지 않음

- fulfilled(이행) : 비동기 처리가 완료 후, 프로미스가 결과값을 반환

- rejected(실패) : 비동기 처리가 실패 또는 오류

  