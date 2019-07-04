// reduce the array into a single value

let num = [1, 23, 10, 15];

let result = num.reduce((res, total) => {
    return total + res

}, 0);

console.log(result);


// it makes an array of all the colours
let colours = [
    { clr: 'red' },
    { clr: 'green' },
    { clr: 'yellow' },
    { clr: 'pink' }
];


colours.reduce((pre, add) => {
    pre.push(add.clr)
    return pre;

}, [])