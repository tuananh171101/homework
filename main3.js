//ex1
function removeFalseValues(arr) {
  return arr.filter((value) => {
    return value !== false && value !== null && value !== undefined && !Number.isNaN(value) && value !== 0 && value !== '';
  });
}
const array = [false, null, undefined, NaN, 0, ''];
const filteredArray = removeFalseValues(array);
console.log(filteredArray); 

//ex2
function filterMaxStringLength(arr) {
  const maxLength = arr.reduce((max, str) => {
    return Math.max(max, str.length);
  }, 0);

  return arr.filter((str) => str.length === maxLength);
}
const array2 = ['aba', 'aa', 'ad', 'c', 'vcd'];
const filteredArray2 = filterMaxStringLength(array2);
console.log(filteredArray2); // Output: ['aba', 'vcd']

//ex3
function compareArrays(array1, array2) {
  const uniqueArray = array1.filter((element) => !array2.includes(element));
  uniqueArray.push(...array2.filter((element) => !array1.includes(element)));
  return uniqueArray;
}
const array3 = [1, 2, 3];
const array4 = [1, 3, 4, 5, 5];
const comparedArray = compareArrays(array3, array4);
console.log(comparedArray); // Output: [2, 4, 5, 5]

//ex4
function createZigzagArray(m, n) {
  const result = [];

  for (let i = 0; i < m; i++) {
    const row = [];

    for (let j = 0; j < n; j++) {
      const value = i % 2 === 0 ? i * n + j + 1 : (i + 1) * n - j;
      row.push(value);
    }

    result.push(row);
  }

  return result;
}

const m = 3;
const n = 4;
const zigzagArray = createZigzagArray(m, n);
console.log(zigzagArray);


