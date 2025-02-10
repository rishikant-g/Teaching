// /* Write a program to check 2 strings are angram or not */


// // This will not work for capital and small letter, because sort method will work different for capital and small letter
// const isAnagram = (str1, str2) => {
//     return str1.split('').sort().join('').toLowerCase() === str2.split('').sort().join('').toLowerCase();
// }

// console.log(isAnagram('silent', 'listen'));
// console.log(isAnagram('silenT', 'liSten'));
// console.log(isAnagram('SILENT', 'listen'));


// // This will work for either capital or small letter case
// const isAnagram1 = (str1, str2) => {
//     const arr1 = str1.split('').map(item => item.toLowerCase());
//     const arr2 = str2.split('').map(item => item.toLowerCase());

//     return arr1.sort().join('') === arr2.sort().join('');
// }

// console.log(isAnagram1('silent', 'listen'));
// console.log(isAnagram1('silenT', 'liSten'));
// console.log(isAnagram1('SILENT', 'listen'));

// /* Write a function to test a string is palindrome or not */



// /* Wrtie a program to convert a stirng into nameCase */

// const str = "hello welcome back to JavaScript";
// const arr = str.split(" ");
// const tempArr = [];

// for ([index, element] of arr.entries()) {
//     const temp = element.charAt(0).toUpperCase() + element.substring(1, element.length);
//     arr[index] = temp;

// }
// console.log(arr.join(" "));

// /* Write a function to check given string is palindrom or not */

// const isPalindrome = (str) => {
//     const originString = str;
//     const reversedString = str.split('').reverse().join('');
//     return originString === reversedString;
// }

// console.log(isPalindrome('madam')); // true
// console.log(isPalindrome('racecar')); // ture
// console.log(isPalindrome('hello')); // false


// // Write a function to capitalize the first character of string after each space and rest should be lower case*/

// const capitalizeFirstCharacter = (str) => {
//     const arr = str.split(" ");
//     const result = [];

//     arr.forEach(ele => {
//         result.push(ele.charAt(0).toUpperCase() + ele.substring(1).toLowerCase());
//         //substring takes 2 agrugmen first star index, second end index if you do not pass end index will will take the array length-1
//     })
//     return result.join(' ');
// }

// console.log(capitalizeFirstCharacter("my name Is risheeKant ViSHWakarma"))

// Write a function to convert camel case to snake case and vice versa 

// const convertCase = (str) => {
//     const arr = str.split('');
//     const finalArray = [];

//     if (arr.includes('_')) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === '_') {
//                 finalArray.push(arr[i + 1].toUpperCase());
//                 i++;
//             } else {
//                 finalArray.push(arr[i].toLowerCase());
//             }
//         }
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
//                 finalArray.push('_');
//                 finalArray.push(arr[i].toLowerCase());
//             } else {
//                 finalArray.push(arr[i]);
//             }
//         }
//     }
//     return finalArray.join('');
// }

// console.log(convertCase('camelCase')); // camel_case
// console.log(convertCase('snake_case')); // snakeCase

// Write a program to find the longest substring palindrom 

// const str = "aabcmadamxyzbabracecarabc";
// const arr = str.split("");
// const result = [];

// for (let i = 0; i <= arr.length; i++) {
//     // here added less than equal because substring take first parameter inclusive and second exclusive
//     for (let j = i + 1; j <= arr.length; j++) {
//         const subString = str.substring(i, j);
//         result.push(subString);
//     }
// }

// const palindromes = [];
// for (let i = 0; i < result.length; i++) {
//     if (result[i] === result[i].split("").reverse().join("")) {
//         palindromes.push(result[i]);
//     }
// }
// console.log(result);
// console.log(palindromes);


// let longestString = palindromes[0];

// for (let i = 0; i < palindromes.length; i++) {
//     if (palindromes[i].length > longestString.length) {
//         longestString = palindromes[i];
//     }
// }
// console.log('longest Palingrom string is: ', longestString);


/* Write a program to find Longest Substring Without Repeating Character */

const str = "abcababcdabaxyatst";

const arr = str.split("");

let index = 0;
const result = [];

for (let i = 0; i < arr.length; i++) {
    if (result[index] && result[index].includes(arr[i])) {
        index++;
        result[index] = arr[index];
        i = index;
    } else {
        result[index] = result[index] ? result[index] + arr[i] : arr[i];
    }
}

console.log(result);
