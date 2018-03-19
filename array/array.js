/*

https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php

#1
Write a JavaScript function to check whether an `input` is an array or not.

Input  : 'w3resource'
Output : false

Input  : [1, 2, 4, 0]
Output : true

*/

function f1(data) {
  return Array.isArray(data) ? true : false;
}

/*

#2
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

Input  : [7, 9, 0, -2]
Output : [7]

Input  : [], 3
Output : []

Input  : [7, 9, 0, -2], 3
Output : [7, 9, 0]

*/

function f2(data, n = 1) {
  return data.splice(0, n);
}

/*

#3
Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

Input  : [7, 9, 0, -2]
Output : [-2]

Input  : [], 3
Output : []

Input  : [7, 9, 0, -2], 3
Output : [9, 0, -2]

*/

function f3(data, n = 1) {
  return data.splice(data.length - n, n);
}

/*

#4
Write a JavaScript program to shuffle an array.

Input  : [7, 9, 0, -2]

*/

function f4(data) {
  let dataArray = [...data];
  let newArray = [];

  for (let i = 0; i < data.length; i++) {
    let random = Math.floor(Math.random() * dataArray.length) + 0;
    newArray.push(dataArray[random]);
    dataArray.splice(random, 1);
  }

  return newArray;
}

/*

#5
Write a JavaScript program to compute the union of two arrays.

Input  : [1, 2, 3], [100, 2, 1, 10]
Output : [1, 2, 3, 10, 100]

*/

function f5(arr1, arr2) {
  let result = [...arr1, ...arr2].sort((a, b) => a - b);

  for (let i = 0; i < result.length; i++) {
    if (result[i + 1] === result[i]) {
      result.splice(i, 1);
      i = 0;
    }
  }

  return result;
}

/*

#6
Write a JavaScript function to remove a specific element from an array.

Input  : [2, 5, 9, 6], 5
Output : [2, 9, 6]

*/

function f6(data, toDelete) {
  return data.filter(el => el !== toDelete);
}

/*

#7
Write a JavaScript function to find the unique elements from two arrays.

Input  : [1, 2, 3, 10], [100, 2, 1, 10]
Output : ['3', '100']

*/

function f7(arr1, arr2) {
  let result = {}; 
  let resultArr = [];

  [...arr1, ...arr2].forEach(key => result[key] ? result[key] += 1 : result[key] = 1);

  Object.keys(result).forEach(key => result[key] === 1 ? resultArr.push(key) : false);

  return resultArr;

}
