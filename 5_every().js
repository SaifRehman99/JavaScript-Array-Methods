let numbers = [1, 5, 91, 16, 18, 19]

// check for the entire array and return ture or false
let check = (num) => {
    return num > 10;
}
console.log(numbers.every(check))