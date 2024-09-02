// TASK-- G


function getHighestIndex(son) {
  let maxValue = 0;

  let maxIndex = -1;

  for (let i = 0; i < son.length; i++) {
    if (son[i] > maxValue) {
      maxValue = son[i];

      maxIndex = i;
    }
  }

  return maxIndex;
}

console.log(getHighestIndex([44, 21, 12, 21, 33]));

