






function rightAngledTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log('*'.repeat(i));
    }
}
rightAngledTriangle(5);


// *
// **
// ***
// ****
// *****






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

