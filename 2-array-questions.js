// // Remove duplicate elements from array
// const arr = [1, 2, 1, 3, 4, 1, 6, 8, 2, 3, 9, 77, 55, 43, 4, 2, 4, 1, 1, 6, 0, 1, 0, 5, 6];
// //First way
// const uniqueArr = [... new Set(arr)]; // Set always store the unique value

// console.log(uniqueArr);

// //Second way

// const uniqueArray = arr.filter((element, index) => {
//     return arr.indexOf(element) === index // indexOf method returns the index of first found element
// })
// console.log(uniqueArray);

// // Merge arrays using spread operator
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// const array3 = [4, 5, 2];

// const result = [...array1, ...array2, ...array3];
// console.log(result);

// Sort string and number array
/*
The sort() method in JavaScript converts each element in the array to a string (if it’s not already a string), and then compares the strings based on the UTF-16 (Unicode) encoding values of their characters. This means it effectively uses the character's ASCII value (for characters that fall within the ASCII range) to determine the order.
*/
// const nonPremitiveArray = ['Apple', 'Grapes', 'Guava', 'Banana'];
// nonPremitiveArray.sort();
// console.log(nonPremitiveArray);

// const arr1 = [1, 2, 1, 3, 4, 1, 6, 8, 2, 3, 9, 77, 55, 43, 4, 2, 4, 1, 1, 6, 0, 1, 0, 5, 6];
// arr1.sort();
// console.log(arr1);

// arr1.sort((a, b) => a - b);
// console.log(arr1);

/*
    Write a program to find minium and maximum number from an array
*/

// const arr = [1, 2, 98, 2, 33, 11, 44, 2];

// console.log('Max', Math.max(...arr));
// console.log('Min', Math.min(...arr));


// Write a program to flat an array
// const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]], [7, 1]], 99, [1, [3, 4]]];
// // console.log(arr.flat(Infinity));

// const result = [];
// const flatInfinity = (arr) => {
//     arr.forEach(element => {
//         if (Array.isArray(element)) {
//             flatInfinity(element);
//         }
//         else {
//             result.push(element);
//         }
//     });
//     return result;
// }

// console.log(flatInfinity(arr));


/*
How to write a custom map function
*/
// Array.prototype.myMap = (arr, callback) => {
//     return arr.reduce((result, item) => {
//         result.push(callback(item));
//         return result;
//     }, []);

// };

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const customFun = (ele) => ele * 2;

// const result = arr.myMap(arr, customFun)
// console.log(result);

/*
    Write a program to find all the element in an array which is greater than it's previous element and less than next element
*/

// const arr = [1, 2, 3, 4, 11, 56, 32, 88, 65, 33, 98, 56, 13];
// arr.forEach((ele, index) => {
//     if (index !== 0 && ele > arr[index - 1] && ele < arr[index + 1]) {
//         console.log(arr[index]);
//     }
// });

/*
Find the missing number in an array
*/

// function findMissingNumber(arr) {
//     console.log('length', arr.length);
//     const n = arr.length + 1; // since one number is missing, length + 1
//     const expectedSum = (n * (n + 1)) / 2; // sum of numbers 1 to n
//     console.log('expectedSum', expectedSum);
//     const actualSum = arr.reduce((sum, num) => sum + num, 0); // sum of array elements
//     console.log('actualSum', actualSum);

//     return expectedSum - actualSum; // the difference is the missing number
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// console.log('missing number', findMissingNumber(arr)); // Output will be 4

// What is the purpose of the array slice method
// The slice() method returns the selected elements in an array as a new array object.
//It selects the elements starting at the given start argument, and ends at the given
//optional end argument without including the last element. If you omit the second argument
// then it selects till the end.

// Array methods questions slice, splice and reduce


// const arr = [1, 6, 3, 8, 2, 9];
// // const result = arr.slice(2, 5); // It will return element from index 2 to 4
// // //splice method works first paramter inclusive and second param excluve

// // console.log(result);// [3,8,2]
// // console.log(arr); // This will print original array it do not affect on original array


// const result1 = arr.splice(2, 0, 5);
// console.log(result1);
// console.log(arr);


// What is the difference between slice and splice
// Some of the major difference in a are

// Slice
// Doesn't modify the original array(immutable)	Modifies the original array(mutable)
// Returns the subset of original array	Returns the deleted elements as array
// Used to pick the elements from array	Used to insert or delete elements to/from array
//Splice
// The splice() method is used either adds/removes items to/from an array,
// and then returns the removed item. The first argument specifies the array
//position for insertion or deletion whereas the optional second argument indicates
// the number of elements to be deleted. Each additional argument is added to the array.

//Reduce 

const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((acc, ele) => {
    return acc = acc + ele;
}, 0)

console.log(sum);


