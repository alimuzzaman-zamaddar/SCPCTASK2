// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const ReverseSting = (str) => {
    let RString = "";
    for(let i = str.length - 1; i >= 0; i--){
        RString += str[i]
    }
   return RString
}

// const result = ReverseSting("hello world")
// console.log(result);


// // Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const SumOfPositive = (arr)=> {
    let sum  = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            sum+=arr[i]
        }
    }
    return sum;
}
const arr = [2, -5, 10, -3, 7] 
// const result = SumOfPositive(arr);
// console.log(result);

// // Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const findMostFrequentElement = (arr) =>  {
  const frequencyCounter = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
  }
  let mostFrequentElement = arr[0];
  let highestFrequency = frequencyCounter[arr[0]];

  for (const element in frequencyCounter) {
    if (frequencyCounter[element] > highestFrequency) {
      mostFrequentElement = element;
      highestFrequency = frequencyCounter[element];
    }
  }

  return mostFrequentElement;
}
// const array =  [3, 5, 2, 5, 3, 3, 1, 4, 5];
// console.log(findMostFrequentElement(array)); 

// // Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const  SimpleCalculator = (num1, operator, num2) =>  {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      return num1 / num2;
    }
     
  }
  
  const num1 = 5;
  const num2= 3;
  const operator = '+';
  const result = SimpleCalculator(num1, operator, num2);
  // console.log(result); 
  
// //   Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.



const GenerateRandomPassword = (length) =>  {
  const uppercaseCh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseCh = "abcdefghijklmnopqrstuvwxyz";
  const numberCh = "0123456789";
  const specialCh = "!@#$%^&*()-_+=[]{}|;:,.<>?";

  const allCharacters =
    uppercaseCh + lowercaseCh + numberCh + specialCh;
  
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}
const passwordLength = 8;
const generatedPassword = GenerateRandomPassword(passwordLength);
// console.log(generatedPassword); 


// // Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const  ConvertRomanNumeralToInteger = (romanNumeral) => {
  const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500,  M: 1000,};

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentChar = romanNumeral[i];
    const currentValue = romanMap[currentChar];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}

// console.log(ConvertRomanNumeralToInteger("IX")); 
// console.log(ConvertRomanNumeralToInteger("XXI")); 


// // Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (arr) => {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}
// const numbers = [12, 5, 7, 3, 9, 2];
// console.log(findSecondSmallest(numbers)); 

