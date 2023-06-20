
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
