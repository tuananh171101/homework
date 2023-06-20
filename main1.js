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
  const result = sumDivisors(number2);
  console.log("The sum of divisors of", number2, "is:", result);
  
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
  const result5 = sumPrimes(number5);
  console.log("The sum of prime numbers less than or equal to", number5, "is:", result);