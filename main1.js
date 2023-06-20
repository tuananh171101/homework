 // Part1 : xử lý số

 function calculateSphereVolume(radius) { //bài 1
    // Check if the radius is valid (non-negative)
    if (radius < 0) {
      return "Invalid radius. Please provide a non-negative value.";
    }
  
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  
    // Round the volume to 2 decimal places
    const roundedVolume = volume.toFixed(2);
  
    return roundedVolume;
  }
  
  function sumIntegersInRange(start, end) { //bài 2
   
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
      return "Invalid input. Please provide valid integers.";
    }
  
    if (start > end) {
      [start, end] = [end, start];
    }
  
    let sum = 0;
  
    // Iterate from start to end (inclusive) and sum the integers
    for (let i = start; i <= end; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  
  function sumDivisors(number) { //bài 3
    // Check if the number is a positive integer
    if (number <= 0 || !Number.isInteger(number)) {
      return "Invalid input. Please provide a positive integer.";
    }
  
    let sum = 0;
  
    // Iterate from 1 to the number and check for divisors
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  function isPrime(number) {//bài 4
      // Check if the number is a positive integer
      if (number <= 1 || !Number.isInteger(number)) {
        return false;
      }
    
      // Check if the number is divisible by any integer from 2 to the square root of the number
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
    
      return true;
    }
    function sumPrimes(number) {
      // Check if the number is a positive integer
      if (number <= 1 || !Number.isInteger(number)) {
        return "Invalid input. Please provide a positive integer.";
      }
    
      let sum = 0;
    
      // Iterate from 2 to the given number
      for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
          sum += i;
        }
      }
    
      return sum;
    }
  
    
  
    
  //bài 1
  let radius = 5;
  let volume = calculateSphereVolume(radius);
  console.log("The volume of the sphere is:", volume);
  
  //bài 2
  const number2=13;
  const resultss = sumDivisors(number2);
  console.log("The sum of divisors of", number2, "is:", resultss);
  
  //bài 3
  let start = 3;
  let end = 8;
  const results = sumIntegersInRange(start, end);
  console.log("The sum of integers between", start, "and", end, "is:", results);
  //bài 4
  
  const number4 = 13;
  const results4 = isPrime(number4);
  console.log(number4, "is prime:", results4);
  
  //bài 5
  
  const number5 = 20;
  const result5s = sumPrimes(number5);
  console.log("The sum of prime numbers less than or equal to", number5, "is:", result5s);


  //part2

  function capitalizeWords(str) {
    // Split the string into an array of words
    const words = str.split(" ");
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    });
  
    // Join the capitalized words into a new string
    const capitalizedStr = capitalizedWords.join(" ");
  
    return capitalizedStr;
  }
  
  function convertToSpinalCase(str) {
    // Replace all non-alphanumeric characters with dashes
    const sanitizedStr = str.replace(/[^a-zA-Z0-9]/g, "-");
  
    // Replace spaces with dashes
    const replacedSpaces = sanitizedStr.replace(/\s+/g, "-");
  
    // Convert to lowercase
    const lowercaseStr = replacedSpaces.toLowerCase();
  
    return lowercaseStr;
  }
  function isSymmetricString(str) {
    // Remove spaces and convert to lowercase
    const sanitizedStr = str.replace(/\s+/g, "").toLowerCase();
  
    // Reverse the string
    const reversedStr = sanitizedStr.split("").reverse().join("");
  
    // Check if the reversed string is equal to the original string
    return sanitizedStr === reversedStr;
  }
  
  
  function containsAllCharacters(str1, str2) {
    // Remove spaces from both strings
    const sanitizedStr1 = str1.replace(/\s+/g, "");
    const sanitizedStr2 = str2.replace(/\s+/g, "");
  
    // Convert both strings to lowercase
    const lowercaseStr1 = sanitizedStr1.toLowerCase();
    const lowercaseStr2 = sanitizedStr2.toLowerCase();
  
    // Check if each character in str2 is present in str1
    for (let char of lowercaseStr2) {
      if (!lowercaseStr1.includes(char)) {
        return false;
      }
    }
  
    return true;
  }
  

  
  
  // Example usage:

  //bài1
  const str = "HELLO world";
  const result = capitalizeWords(str);
  console.log("Original string:", str);
  console.log("Capitalized string:", result);
  
  //bài 2
  const str2 = "Convert a string of many words into Spinal Case";
  const result2 = convertToSpinalCase(str2);
  console.log("Original string:", str2);
  console.log("Spinal case string:", result2);
  
  //bài 3

  const str3 = "Race car";
  const result3 = isSymmetricString(str3);
  console.log(str3, "is symmetric:", result3);
  
  const str4 = "hello world";
  const result4 = isSymmetricString(str4);
  console.log(str4, "is symmetric:", result4);
  

    // Example usage:
    const str5 = "HELLO world";
    const str6 = "how";
    const result5 = containsAllCharacters(str5, str6);
    console.log("Does", str5, "contain", str6 + "?", result5);
    
    const str7 = "HELLO world";
    const str8 = "hey";
    const result6 = containsAllCharacters(str7, str8);
    console.log("Does", str7, "contain", str8 + "?", result6);
    
    const str9 = "HELLO world";
    const str10 = "ww";
    const result7 = containsAllCharacters(str9, str10);
    console.log("Does", str9, "contain", str19 + "?", result7);


  //part 3
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


//part4

function calculateAverageAge(students) {
  const totalAge = students.reduce((sum, student) => {
    return sum + student.age;
  }, 0);

  return totalAge / students.length;
}
function rearrangeByAgeDescending(students) {
  return students.sort((a, b) => b.age - a.age);
}
function rearrangeByNameCaseInsensitive(students) {
  return students.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
}
function filterStudentsByStartingLetterH(students) {
  return students.filter((student) => {
    const firstLetter = student.name.charAt(0).toLowerCase();
    return firstLetter === 'h';
  });
}

const students = [
  { name: 'Huy', age: 20 },
  { name: 'John', age: 22 },
  { name: 'Sarah', age: 19 },
];
const averageAge = calculateAverageAge(students);
console.log(averageAge); 

//part 5
//ex1
function addSecondsToTime(timeString, secondsToAdd) {
  const [hourStr, minuteStr, secondStr] = timeString.split(':');
  let hour = parseInt(hourStr, 10);
  let minute = parseInt(minuteStr, 10);
  let second = parseInt(secondStr, 10);

  // Add the seconds
  second += secondsToAdd;

  // Handle overflow
  minute += Math.floor(second / 60);
  second %= 60;
  hour += Math.floor(minute / 60);
  minute %= 60;

  // Format the result
  const formattedTime = `${padZero(hour)}:${padZero(minute)}:${padZero(second)}`;
  return formattedTime;
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}
const timeString = '09:20:56';
const secondsToAdd = 7;
const resultsss = addSecondsToTime(timeString, secondsToAdd);
console.log(resultsss);

//ex2
function calculateDaysToClimbWell(height, climbDay, slideNight) {
  let distanceClimbed = 0;
  let days = 0;

  while (true) {
    distanceClimbed += climbDay;
    days++;

    if (distanceClimbed >= height) {
      break;
    }

    distanceClimbed -= slideNight;
  }

  return days;
}

const wellHeight = 30;
const climbDuringDay = 5;
const slideDuringNight = 2;
const daysToClimb = calculateDaysToClimbWell(wellHeight, climbDuringDay, slideDuringNight);
console.log(daysToClimb); 

//ex3

function rearrangeDigits(number) {
  const digits = Array.from(String(number), Number);
  digits.sort((a, b) => a - b);
  const rearrangedNumber = digits.join('');
  return parseInt(rearrangedNumber, 10);
}
const number = 530751;
const rearranged = rearrangeDigits(number);
console.log(rearranged); 
  


  