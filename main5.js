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
  const result = addSecondsToTime(timeString, secondsToAdd);
  console.log(result);

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
    

    