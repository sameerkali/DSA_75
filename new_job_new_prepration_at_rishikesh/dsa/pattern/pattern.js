






// function rightAngledTriangle(rows) {
//     for (let i = 1; i <= rows; i++) {
//         console.log('*'.repeat(i));
//     }
// }
// rightAngledTriangle(5);

/*
function rightAngledTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '*';
        }
        console.log(line);
    }
}
rightAngledTriangle(5);
*/


// *
// **
// ***
// ****
// *****


const pattern = (a) => {
    for(let i=a ; i > 0; i--){
        console.log('*'.repeat(i))
    }
}
pattern(10)



















// function invertedRightAngledTriangle(rows) {
//     for (let i = rows; i >= 1; i--) {
//         console.log('*'.repeat(i));
//     }
// }
// invertedRightAngledTriangle(5);


// *****
// ****
// ***
// **
// *




// function pyramidPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         console.log(' '.repeat(rows - i) + '*'.repeat(2 * i - 1));
//     }
// }
// pyramidPattern(5);


//     *
//    ***
//   *****
//  *******
// *********




// function diamondPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         console.log(' '.repeat(rows - i) + '*'.repeat(2 * i - 1));
//     }
//     for (let i = rows - 1; i >= 1; i--) {
//         console.log(' '.repeat(rows - i) + '*'.repeat(2 * i - 1));
//     }
// }
// diamondPattern(5);


//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *




// function squarePattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         if (i === 1 || i === rows) {
//             console.log('*'.repeat(rows));
//         } else {
//             console.log('*' + ' '.repeat(rows - 2) + '*');
//         }
//     }
// }
// squarePattern(5);


// *****
// *   *
// *   *
// *   *
// *****