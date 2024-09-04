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


//H- TASK 

function getPositive(musbat: number[]): string {
  return musbat
    .filter((num: number) => num > 0)  
    .join('');                         
}

console.log(getPositive([-4, -3, -3 , -1, 1])); 

