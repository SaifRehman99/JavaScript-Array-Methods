// reduce the array into a single value

let num = [1, 23, 10, 15];

let result = num.reduce((res, total) => {
    return total + res

}, 0);

console.log(result);