// it finds the first presence and return


let numbers = [
    {
        id: 1,
        name: 'ok'
    },
    {
        id: 2,
        name: 'ok1'
    },
    {
        id: 3,
        name: 'ok2'
    }
];


// check for the item and return the complete that item
let find = numbers.find((num) => num.id === 2);
console.log(find)