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


function birxilmi(str : String) {
  let rev = str.split("").reverse().join("");

  if (rev == str) {
      return true
  }
  return false

}

let str1 = "ona";
let str2 = "men";
let str3 = "121";

console.log(birxilmi(str1));
console.log(birxilmi(str2));
console.log(birxilmi(str3));
