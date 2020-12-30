// 배열은 []로 감싼다
const arr = [1,2,3,4];

// 객체 배열
const objs = [{name:'one'},{name:'two'}];

// 배열 내 객체 조회 objs[n]
console.log(objs[0]);
console.log(objs[1]);

// 배열 새 객체 추가
objs.push({name: 'three'});

console.log(objs);

// 배열의 크기 조회
console.log(objs.length);