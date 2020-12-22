// 배열에서의 비구조화 할당
console.log("배열에서의 비구조화 할당\n");
let a, b, rest;

// undefined  , undefined ,  undefined
console.log(a," ,",b,", ",rest);

[a, b] = [1, 2];

// 1  , 2 ,  undefined
console.log(a," ,",b,", ",rest);

[a, b, ...rest] = [3,4,5,6,7,8,9,10];       // ...는 전개 연산자 : 명시적으로 할당되지 않은 나머지 배열값들을 사용할 수 있다

// 3  , 4 ,  [ 5, 6, 7, 8, 9, 10 ]
console.log(a," ,",b,", ",rest);

({a,b} = {a:10, b:20});

// 10  , 20 ,  [ 5, 6, 7, 8, 9, 10 ]
console.log(a," ,",b,", ",rest);

({a,b, ...rest} = {a:30, b:40, c:50, d:60, e:70});

// 30  , 40 ,  { c: 50, d: 60, e: 70 }
console.log(a," ,",b,", ",rest);

console.log('\n\n\n\n----------------------------\n');
// 객체에서의 비구조화 할당
console.log("객체에서의 비구조화 할당\n");

let obj1 = {
    name : 'square',
    point: 4
}
let obj2 = {
    name : 'triangle',
    point : 3
}

function printObj(obj){
    // 객체의 값을 추출해 새로운 변수로 선언해준다.
    let {name , point} = obj;
    let text = `${name}의 꼭지점의 갯수는 ${point}개 입니다.`;
    console.log(text);
}

// 파라미터 단계에서 객체 비구조화 할당하기
function printObj2({name , point}){
    let text = `${name}의 꼭지점의 갯수는 ${point}개 입니다.`;
    console.log(text);
}

printObj(obj1);
printObj2(obj2);