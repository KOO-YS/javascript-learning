const arr = [1,2,3,4,5,6,7,8,9];

const squard1 = [];

// 1. 기존 문법으로 제곱 배열 생성 
for(let i=0; i<arr.length; i++){
    // 각각 곱해서 배열에 더해준다
    squard1.push(arr[i]*arr[i]);     
}
console.log("1 : ",squard1);

// 2. forEach를 사용한 제곱 배열 생성
const squard2 = [];
arr.forEach(i =>{
    // 각각 곱해서 배열에 더해준다 
    squard2.push(i*i);
});

console.log("2 : ",squard2);

// 3. map을 사용한 제곱 배열 생성
const rule = i => i*i;      // -> 변화함수
const squard3 = arr.map(rule);

console.log("3 : ",squard3);

// 4. map 코드 단축
const squard4 = arr.map(i => i*i);

console.log("4 : ",squard4);


