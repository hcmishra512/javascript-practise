//*****frequency counter array2 is same to squire of array1.
//
const array1 = [1, 2, 4, 3];
const array2 = [1, 4, 9, 16];

function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(array2);
    array2.splice(correctIndex, 1);
  }
  return true;
}
console.log(same(array1, array2));
console.log(same([1, 2, 4, 3, 2], [1, 4, 9, 16, 9]));

//
// *****same to next with object storing method****
//
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  console.log(freqCounter1, freqCounter2);
  return true;
}
console.log(same([1, 6, 7, 3, 8, 1, 7, 7], [1, 9, 64, 36, 49, 1, 49, 49]));

//
//*******words letter matching********** */
//
function validMatch(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i; i < second.length; i++) {
    //can't find letter or letter zero thenit's not validmatch
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
console.log(validMatch("anagram", "nagaram"));
console.log(validMatch("anagrams", "nagarama"));

//
// ********* add two first no to zero*********
//
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return arr[i], arr[j];
      }
    }
  }
}
console.log(sumZero([-4, -3, -2, 0, 1, 1, 5, 3]));
//
//********** by second method******* */
//
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZero([-6, -4, -2, 0, 6, 1, 4, 7]));
//
//*********countUniqueValue by two pointer i & j */
//
function countUniqueValue(arr) {
  let i = 0;
  if (arr.length === 0) {
    return 0;
  }

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValue([-2, -1, 0, 1, 2, 2, 3, 3, 5, 5, 6, 6, 7, 7]));
console.log(countUniqueValue([]));

//
// ****** given max number Subarray sum **************
//
// function maxSubarraySum(array, num) {
//   if (num > array.length) return null;
//   var max = -Infinity;
//   for (let i = 0; i < array.length; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += array[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//     console.log(temp, max);
//   }
//   return max;
// }
// console.log(maxSubarraySum([2, 4, 5, 6, 8, 9, 5, 3, 8, 6], 3));
// //
//********another method maxSubarraySum */
//
function maxSubarraySum(array, num) {
  let tempSum = 0;
  let maxSum = 0;
  if (array.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(tempSum, maxSum);
  return maxSum;
}

console.log(maxSubarraySum([3, 5, 7, 9, 8, 6, 4, 9, 7, 5, 8], 3));

//
// ***********find the value array**********
//
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return null;
}
console.log(search([2, 4, 6, 8, 1, 4, 6, 8, 7], 8));
//
//****alternate aproch */
//

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
console.log(search([2, 4, 6, 8, 1, 3, 5, 7, 9]), 3);
//
//***********same frequency Solution */
//
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }
  return true;
}
console.log(sameFrequency("harish", "hsirah")); // true
console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(22, 222)); //true

//
//******are there Duplicates Solution frequency Counter */
//

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

//
//*******areThereDuplicates One Liner Solution
//

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates([1, 2, 3, 4, 5, 2, 2, 2]));
//
// ******avarage Pair Solution*********
//
function avaragePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
console.log(avaragePair([1, 2, 3], 2.5)); //true
console.log(avaragePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(avaragePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(avaragePair([], 4)); //false
//
//*********isSubsequence Solution - Iterative */
//
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
console.log(isSubsequence("hello", "hello world")); //true
console.log(isSubsequence("sing", "string")); //true
console.log(isSubsequence("abc", "abracadabra")); //true
console.log(isSubsequence("abc", "acb")); //false

//
//***********isSubsequence Solution - Recursive but not O(1) Space */
//
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

//
//*********maxSubArray Solution */
//
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
console.log(maxSubarraySum([2, 3], 3)); //null
//
//***************Find the longest substring solution********
//
function findTheLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
  for (i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
console.log(findTheLongestSubstring("rithmschool")); //7
console.log(findTheLongestSubstring("thisisawesome")); //6
console.log(findTheLongestSubstring("bbbbbbbbbb")); //1
console.log(findTheLongestSubstring("longestsubstring")); //8
console.log(findTheLongestSubstring("thecatinthehat")); //7
console.log(findTheLongestSubstring("Harish Chandra Mishra")); //9
console.log(findTheLongestSubstring("")); //0
