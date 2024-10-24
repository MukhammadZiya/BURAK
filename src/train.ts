// console.log("hellow");

// TASK-- G

// function getHighestIndex(son) {
//   let maxValue = 0;

//   let maxIndex = -1;

//   for (let i = 0; i < son.length; i++) {
//     if (son[i] > maxValue) {
//       maxValue = son[i];

//       maxIndex = i;
//     }
//   }

//   return maxIndex;
// }

// console.log(getHighestIndex([44, 21, 12, 21, 33]));

// //H- TASK

// function getPositive(musbat: number[]): string {
//   return musbat
//     .filter((num: number) => num > 0)
//     .join('');
// }

// console.log(getPositive([-4, -3, -3 , -1, 1]));

// H2 TASK

// function getDigits(input: string): string {
//   return input.split('').filter(char => char >= '0' && char <= '9').join('');
// }

// console.log(getDigits("mfsdfsdfsdfsdf8sdf9s8d7f89s7d98f7s98df"));

//Project Standarts:

/*
  Logging standarts
  Naming Standarts:
    function, method , variable => Camel
    class => Pascal
    folder => Kebab
    css => Snake

  -Error handling  
*/

/*
 Traditional API
 API
 GraphQL API
*/

// Cookie => req.join .... => self.destroy

// TASK - I

// function majorityElement(arr: number[]): number {
//   let maxCount = 0;
//   let mostFrequent: number | undefined;

//   for (const num of arr) {
//     const count = arr.filter(x => x === num).length;

//     if (count > maxCount) {
//       maxCount = count;
//       mostFrequent = num;
//     }
//   }

//   if (mostFrequent === undefined) {
//     throw new Error("No majority element found.");
//   }

//   return mostFrequent;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4, 5, 5,5 ,]));

// Train Js

// function findLongestWord(sentence: string): string {
//   const words = sentence.match(/\b\w+\b/g) || [];

//   let longestWord = words.reduce((longest, current) => {
//     return current.length > longest.length ? current : longest;
//   }, "");

//   return longestWord;
// }

// const result = findLongestWord("I came from Uzbekistan!");
// console.log(result);

//TASK - K

// function countVowels(input: string): number {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let count = 0;

//   for (let char of input) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("MIT SILA"));

// TASK L

// function reverseSentence(sentence: string): string {
//   return sentence
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseSentence("we like coding!"));

//TASK M

// function getSquareNumber(arr: number[]){
//   let newArr = [];

//   for(let i = 0; i < arr.length; i++) {
//    newArr.push({number: arr[i], square: arr[i]*arr[i]})
//   }

//   return newArr
// }

// console.log(getSquareNumber([15,27,39]));

//TASK N

// function birxilmi(str : String) {
//   let rev = str.split("").reverse().join("");

//   if (rev == str) {
//       return true
//   }
//   return false

// }

// let str1 = "ona";
// let str2 = "men";
// let str3 = "121";

// console.log(birxilmi(str1));
// console.log(birxilmi(str2));
// console.log(birxilmi(str3));

// TASK - O

// function calculateSumOfNumbers(arr: any ) {
//   let sum = 0;
//   arr.forEach((item: number) => {
//       if (typeof item === 'number') {
//           sum += item;
//       }
//   });
//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35, 50]));

//TASK -P

// function objectToArray (obj:Object) {

//   return Object.entries(obj);
// }

// console.log(objectToArray( {a: 1, b: 2}));

//TASK Q

// function hasProperty(obj: object, property:string) {
//   return property in obj;
// }

// // Misollar uchun foydalanish
// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));

// //TASK R

// function calculate(expression: string) {
//   const numbers = expression.split(' + ').map(Number);
//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//   return sum;
// }

// console.log(calculate("1 + 3"));
// console.log(calculate("10 + 20"));

// TASK S

// function missingNumber(arr: number[]): number {
//   const n = arr.length;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((sum, num) => sum + num, 0);
//   return expectedSum - actualSum;
// }

// // Example usage
// console.log(missingNumber([4, 0, 3, 1]));

//TASK T

// function mergeArrays(arr1: number[], arr2: number[]): number[] {
//   let arr3 = arr1.concat(arr2);
//   arr3.sort((a, b) => a - b);
//   return arr3;
// }

// let arr1: number[] = [1, 3, 5, 7];
// let arr2: number[] = [2, 4, 6, 8];
// let arr3: number[] = mergeArrays(arr1, arr2);

// console.log(arr3.join(" "));

// TASK V

// function countChars(input: string): { [key: string]: number } {
//   const charCount: { [key: string]: number } = {};

//   for (const char of input) {
//       if (charCount[char]) {
//           charCount[char]++;
//       } else {
//           charCount[char] = 1;
//       }
//   }

//   return charCount;
// }

// const result = countChars("hello");
// console.log(result);

// TASK W

// function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
//   const result: T[][] = [];

//   for (let i = 0; i < arr.length; i += chunkSize) {
//       const chunk = arr.slice(i, i + chunkSize);
//       result.push(chunk);
//   }

//   return result;
// }

// const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(result);

// MIT TASK X

// function countOccurrences(obj: Record<string, any>, key: string): number {
//   let count = 0;

//   function search(o: Record<string, any>): void {
//       for (const k in o) {
//           if (k === key) count++;
//           if (typeof o[k] === 'object' && o[k] !== null) search(o[k]);
//       }
//   }

//   search(obj);
//   return count;
// }

// const result = countOccurrences({ model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } }, 'model');
// console.log(result);

//  TASK - Y

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return [...new Set(arr1.filter((value) => arr2.includes(value)))];
// }

// const result = findIntersection([1, 2, 3], [3, 2, 0]);
// console.log(result); // [2, 3]

//  TASK - Z

function sumEvens(arr: number[]): number {
  return arr
    .filter((value) => value % 2 === 0)
    .reduce((sum, value) => sum + value, 0);
}

console.log(sumEvens([1, 2, 3]));
console.log(sumEvens([1, 2, 3, 2]));
