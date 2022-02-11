// const arr = [1435, 232, 23, 512, 4, 2, 1, 765];

// arr.sort((a, b) => a - b); //TODO  + > -
// arr.filter(); //TODO > 10

// console.log("arr", arr);

// const nums = [2, 7, 3, 11, 15];
// const target = 22;

// for (let i = 0; i < nums.length - 1; i++) {
// for (let j = i + 1; j < nums.length; j++) {
// if (nums[]) {

// };
//     console.log(nums[i], i);
//   }
// }

// let list1 = [1, 2, 4, 2, 5, 6, 5, 10, 40, 40];
// let list2 = [1, 2, 4];
// let list3 = [];

// ! VARIANT 1
// for (let i = 0; i < list1.length; i++) {
//   list3.push(list1[i]);
// }

// for (let i = 0; i < list2.length; i++) {
//   list3.push(list2[i]);
// }

// ! VARIANT 2
// list1.forEach((element) => {
//   list3.push(element);
// });

// list2.forEach((element) => {
//   list3.push(element);
// });

// list3.sort((a, b) => a - b);

// ! VARIANT 3
// list3 = [...list1, ...list2].sort((a, b) => a - b);
// console.log("output", list3);

// ! ZADACHA 2, SORT
// let isFind = false;

// for (let i = 0; i < list1.length; i++) {
//   for (let j = i + 1; j < list1.length; j++) {
//     if (list1[i] === list1[j]) {
//       isFind = true;
//     }
//   }
// }
// if (isFind === true) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// !!! IsFind v2
// isFind ? console.log("true") : console.log("false");

let nums = [1, 3, 6, 7, 9];
const target = 5;

// let isFind = false;

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] >= target) {
//     isFind = true;
//     console.log(i);
//     break;
//   }
// }

// if (isFind === false) {
//   console.log(nums.length - 1);
// }

// const fn = () => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }
//   return nums.length - 1;
// };
// const index = fn();
// console.log(index);
