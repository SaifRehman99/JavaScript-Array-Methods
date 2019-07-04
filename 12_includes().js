// search for the result
let names = ['Ahmed', 'Ali', 'Saif'];

console.log(names.includes('Saif'))

let isVowel = (string) => {


    let char = ['a', 'e', 'i', 'o', 'u'];
    var num = 0;


    //=========this will count one vowel at a time==============//


    // char.forEach((item) => {
    //     if (string.includes(item)) {
    //         num++;
    //     }
    // })


    // ===============this will count every time================//

    for (var i = 0; i < string.length; i++) {
        if (string.includes(string[i])) {
            num++;
        }
    }
    return num;
}

console.log(isVowel('aaafsudasidiaowiiaoieo'))