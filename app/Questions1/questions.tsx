import React from "react";
import { memo } from "react";

const Questions = () => {
  // 1. Reverse a string
  function reverseString(str: string) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString("hello world"));

  function reverseString2(str: string) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  console.log(reverseString2("hello"));

  // 2. Check if a string is a palindrome
  function Palindrome(str: string) {
    const reverse = str.split("").reverse().join("");
    return str === reverse;
  }
  console.log(Palindrome("racecar"));

  function Palindrome2(str: string) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      } else {
        return true;
      }
    }
  }
  console.log(Palindrome2("racecar"));

  // 3. Find the largest number in an array
  function largestNumber(arr: number[]) {
    return Math.max(...arr);
  }
  console.log(largestNumber([10, 25, 3, 45, 5]));

  function largestNumber2(arr: number[]) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  console.log(largestNumber2([1, 2, 3, 4, 5]));

  // 4. Remove the first element from an array
  function removeFirstElement(arr: number[]) {
    return arr.slice(1);
  }
  console.log(removeFirstElement([1, 2, 3, 4, 5]));

  function removeFirstElement2(arr: number[]) {
    let newArr: number[] = [];
    for (let i = 1; i < arr.length; i++) {
      newArr.push(arr[i]); //newArr = [...newArr,arr[i]]
    }
    return newArr;
  }
  console.log(removeFirstElement2([1, 2, 3, 4, 5]));

  // 5. callback function
  function call(str: string, callback: Function) {
    return callback(`Hello ${str}`);
  }
  console.log(call("World", (str: string) => str.toUpperCase()));

  function call2(a: number, b: number, callback: Function) {
    function add(a: number, b: number) {
      return a + b;
    }
    return callback(add(a, b));
  }
  console.log(call2(1, 2, (result: number) => result));

  // 6. create an arrow function
  const add = (a: number, b: number) => {
    return a + b;
  };
  console.log(add(1, 2));

  // 7. add property to an object
  let people: { [key: string]: any } = { name: "John", age: 30 };
  people["place"] = "New York";
  console.log(people);

  // 8. delete a property from an object
  delete people.age;
  console.log(people);

  // 9. Sum of an array
  function sumOfAnArray(arr: number[]) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  console.log(sumOfAnArray([1, 2, 3, 4, 5]));

  // 10. check if a number is prime or not
  function isPrime(num: number) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(5));

  // 11. Fibonacci series
  function fibonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log(fibonacci(6));

  function fibonacci2(n: number): number {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      let nextfib = fib[i - 1] + fib[i - 2];
      fib.push(nextfib);
    }
    return fib[n];
  }
  console.log(fibonacci2(4));

  function fibonacci3(n: number, memo: { [key: number]: number } = {}) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (memo[n]) {
      return memo[n];
    }
    memo[n] = fibonacci3(n - 1, memo) + fibonacci3(n - 2, memo);
    return memo[n];
  }
  console.log(fibonacci3(8));

  // 12. Factorial
  function factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(5));

  function factorial2(n: number): number {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  console.log(factorial2(5));

  // 13. Power of a Number in JavaScript
  function power(base: number, exponent: number): number {
    return base ** exponent;
  }
  console.log(power(2, 3));

  function power2(base: number, exponent: number): number {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  console.log(power2(2, 3));

  function power3(n: number) {
    return Math.pow(n, 2);
  }
  console.log(power3(2));

  // 14. print the frequency of elements in an array
  function frequency(arr: number[]) {
    const freq: { [key: number]: number } = {};
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (freq[item]) {
        freq[item] += 1;
      } else {
        freq[item] = 1;
      }
    }
    return freq;
  }
  console.log(frequency([1, 2, 3, 4, 5, 1, 2, 3]));

  function countCharacter(str: string, char: string) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  console.log(countCharacter("hello world", "o"));

  // 15. convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius: number) {
    return (celsius * 9) / 5 + 32;
  }
  console.log(celsiusToFahrenheit(32));

  // 16. convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit: number) {
    return ((fahrenheit - 32) * 5) / 9;
  }
  console.log(fahrenheitToCelsius(45));

  // 17. check if a number is even or odd
  function isEven(num: number) {
    if (num % 2 === 0) {
      return `${num} is even`;
    } else {
      return `${num} is odd`;
    }
  }
  console.log(isEven(3));

  //18. sort an array in Ascending order
  function sortArray(arr: number[]) {
    return arr.sort((a, b) => a - b);
  }
  console.log(sortArray([5, 3, 8, 1, 2]));

  function sortArray2(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  console.log(sortArray2([15, 30, 8, 12, 2]));

  // 19. sort an array in Descending order
  function sortArrayDesc(arr: number[]) {
    return arr.sort((a, b) => b - a);
  }
  console.log(sortArrayDesc([5, 3, 8, 1, 2]));

  function sortArrayDesc2(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  console.log(sortArrayDesc2([15, 30, 8, 12, 2]));

  //20.  merge two arrays
  function mergeArrays(arr1: number[], arr2: number[]) {
    return [...arr1, ...arr2];
  }
  console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

  function mergeArrays2(arr1: number[], arr2: number[]) {
    return arr1.concat(arr2);
  }
  console.log(mergeArrays2([1, 2, 3], [4, 5, 6]));

  //21. Intersection of Two Arrays
  function intersection(arr1: number[], arr2: number[]) {
    return arr1.filter((item) => arr2.includes(item));
  }
  console.log(intersection([1, 2, 3], [2, 3, 4]));

  function intersection2(arr1: number[], arr2: number[]) {
    let result: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          result.push(arr1[i]);
        }
      }
    }
    return result;
  }
  console.log(intersection2([1, 2, 3], [2, 3, 4]));

  //22. Union of Two Arrays
  function union(arr1: number[], arr2: number[]) {
    let result = [...arr1];
    for (let i = 0; i < arr2.length; i++) {
      if (!result.includes(arr2[i])) {
        result.push(arr2[i]);
      }
    }
    return result;
  }
  console.log(union([1, 2, 3], [2, 3, 4]));

  function union2(arr1: number[], arr2: number[]) {
    let result = arr1.concat(arr2);
    return [...new Set(result)];
  }
  console.log(union2([1, 2, 3], [2, 3, 4]));

  //23. Find the minimum number in an array
  function findMin(arr: number[]) {
    return Math.min(...arr);
  }
  console.log(findMin([1, 2, 3, 4, 5]));

  function findMin2(arr: number[]) {
    let minimum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minimum) {
        minimum = arr[i];
      }
    }
    return minimum;
  }
  console.log(findMin2([1, 2, -3, 4, 5]));

  //24. check if a string contains another string
  function containsSubstring(str: string, subStr: string) {
    return str.includes(subStr);
  }
  console.log(containsSubstring("hello world", "world"));

  function containsSubstring2(str: string, subStr: string) {
    return str.indexOf(subStr) !== -1;
  }
  console.log(containsSubstring2("hello world", "world"));

  function titleCase(str: string) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  console.log(titleCase("hello world"));

  function titleCase2(str: string) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  console.log(titleCase2("captain america"));

  function titleCase3(str: string) {
    let result = " ";
    let capitalize = true;
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char === "") {
        result += char;
        capitalize = true;
      } else if (capitalize) {
        result += char.toUpperCase();
        capitalize = false;
      } else {
        result += char;
      }
    }
    return result;
  }
  console.log(titleCase3("learning react"));

  //25. Find the longest word in a string
  function longestWord(str: string) {
    let words = str.split(" ");
    let longest = "";
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  console.log(longestWord("hello world this is a test"));

  function longestWord2(str: string) {
    let words = str.split(" ");
    let longest = words.reduce((a, b) => (a.length > b.length ? a : b));
    return longest;
  }
  console.log(longestWord2("hey everyone this is a test"));

  //26. Find the first non-repeating character in a string
  function firstNonrepeatingCharacter(str: string) {
    let charCount: { [key: string]: number } = {};
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null;
  }
  console.log(firstNonrepeatingCharacter("swiss"));

  //27. Convert an Array of Strings to Uppercase
  function convertToUpperCase(arr: string[]) {
    let upperCaseArr: string[] = [];
    for (let str of arr) {
      upperCaseArr.push(str.toUpperCase());
    }
    return upperCaseArr;
  }
  console.log(convertToUpperCase(["hello", "world", "this", "is", "react"]));

  function convertToUpperCase2(arr: string[]) {
    let upperCaseArr2: string[] = [];
    for (let i = 0; i < arr.length; i++) {
      upperCaseArr2[i] = arr[i].toUpperCase();
    }
    return upperCaseArr2;
  }
  console.log(convertToUpperCase2(["g", "m", "a"]));

  function upperCase3(arr: string[]) {
    return arr.map((str) => str.toUpperCase());
  }
  console.log(upperCase3(["this", "is", "a", "test"]));

  //28. reverse an array
  function reverseArray(arr: number[]) {
    let reversed: number[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  console.log(reverseArray([15, 2, 3, 44, 5]));

  //29. Find the last element of an array
  function lastlement(arr: number[]) {
    let lastElement = arr[arr.length-1];
    return lastElement;
  }
  console.log(lastlement([1, 2, 3, 4, 5]));
//30. Create an object and print the property
let person = { name: "Joe", age: 25 };
console.log(person.name);
//31. map function on an array 
function mapArray(arr: number[]) {
  return arr.map((item) => item * 2 );
}
console.log(mapArray([1, 2, 3, 4, 5]));

  return (
    <div>
      <h1>Interview Questions</h1>
      {reverseString("hello world")}
      <br />
      {reverseString2("hello")}
    </div>
  );
};
export default Questions;
