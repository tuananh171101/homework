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