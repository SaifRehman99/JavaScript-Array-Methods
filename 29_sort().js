
// =======================================Alpha Sort=======================================//


// It sorts alphabetically
let names = ['Saif', 'Qadir', 'Ali', 'Farukh', 'Kamran', 'Ibad'];
console.log(names.sort())


// You can reverse the array using reverse
console.log(names.reverse());



//=======================================Numeric Sort=======================================//

let numbers = [40, 100, 1, 5, 25, 10, 2, 3, 65, 9, 12, 88];

// it sort by the first number so '3' is greater then '100'
console.log(numbers.sort())


// you can fix it using compare function (Ascending)
console.log(numbers.sort((a, b) => a - b))



// you can fix it using compare function (Descending)
console.log(numbers.sort((a, b) => b - a))
