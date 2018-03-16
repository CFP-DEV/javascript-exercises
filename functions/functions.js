/*

https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

*/

/*

#1
Write a JavaScript function that reverse a number.

Input  : 32243
Output : 34223

*/

function f1(x) {
  return parseInt(x.toString().split('').reverse().join(''));
}

/*

#2
Write a JavaScript function that checks whether a passed string is palindrome or not?

Input  : 'madam'
Output : true || false

*/

function f2(x) {
  return x.split('').reverse().join('') === x ? true : false;
}

/*

#4
Write a JavaScript function that generates all combinations of a string

Input  : 'dog'
Output : ['d', 'do', 'dog', 'o', 'og', 'g']

*/

function f3(x) {

}

/*

#4
Write a JavaScript function that returns a passed string with letters in alphabetical order.

Input  : 'webmaster'
Output : 'abeemrstw'

*/

function f4(x) {
  return x.split('').sort().join('');
}

/*

#5
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

Input  : 'the quick brown fox'
Output : 'The Quick Brown Fox'

*/

function f5(x) {
 return x.split(' ').map(word => { return word[0].toUpperCase() + word.slice(1); }).join(' ');
}

/*

#6
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

Input  : 'Web Development Tutorial'
Output : 'Development'

*/

function f6(x) {
  let longest = '';

  x.split(' ').forEach(word => { if (word.length >= longest.length) { longest = word; } });

  return longest;
}

/*

#7
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

Input  : 'The quick brown fox'
Output : 5

*/

function f7(x) {
  let num = 0;

  x.split('').forEach(letter => { if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') { num++; } })

  return num;
}

/*

#8
Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

Input  : 3
Output : true

Input  : 12
Output : false

Input  : 11
Output : true

*/

function f8(x) {
  if (x > 1) {
    if (x === 2 || x === 3 || x === 5 || x === 7) {
      return true;   
    } else {
      if (x % 2 !== 0 && x % 3 !== 0 && x % 5 !== 0 && x % 7 !== 0) {
        return true;
      }
    }
  }

  return false;
}

/*

#9
Write a JavaScript function which accepts an argument and returns the type.
There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

*/

function f9(x) {
  return typeof x;
}

/*

#10
Write a JavaScript function which returns the n rows by n columns identity matrix.

*/

function f10(rowN, colN) {

}

/*

#11
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

Input  : [1, 2, 3, 4, 5]
Output : [2, 4]

*/

function f11() {

}

/*

#12
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

Input  : [1, 2, 3, 4, 5]
Output : [2, 4]

*/

function f12() {

}

/*

#13
Write a JavaScript function to compute the factors of a positive integer.

*/

function f13() {

}

/*

#14
Write a JavaScript function to convert an amount to coins.

Input  : 46, [25, 10, 5, 2, 1]
Output : 25, 10, 10, 1

*/

function f14(amount, coins) {
  let result = [];

  while (amount > 0) {
    for (let i = 0; i < coins.length; i++) {
      if (amount - coins[i] >= 0) {
        amount -= coins[i]; 
        result.push(coins[i]);
        break;
      }
    }
  }

  return result;
}

/*

#15
Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

*/


/*

#16
Write a JavaScript function to extract unique characters from a string.

Input  : 'thequickbrownfoxjumpsoverthelazydog'
Output : 'thequickbrownfxjmpsvlazydg'

*/


