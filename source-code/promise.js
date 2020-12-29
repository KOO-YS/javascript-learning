const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);

    }, 1000);
});

// 작업이 끝나고 다른 작업을 해야할 때 then
testPromise.then(n => {
    console.log(n);
});