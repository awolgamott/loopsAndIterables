var assert = require('chai').assert
/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var nums = [22,45,67,89]

var sumOfArray = function(array) {
	var total = 0
	for (var index = 0; index < array.length; index = index + 1) {
 		total = total + array[index]
 	}
	return total
 }
sumOfArray(nums)

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.

var nums = [78,65,34,129]
var maxOfArray = function(array) {
	var max = null
	for (var index = 0; index < array.length; index = index + 1) {
		if(max < array[index]) {
			max = array[index]
		}
		
	}
	return max

}
maxOfArray(nums)

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */

 var isVowel = function(letter) {
 		if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
 			return true
 		}
 		else {
 			return false
 		}
 			
 }
isVowel("a")

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverse = function(word){
	var newWord = ''
	for (var index = word.length - 1; index >= 0; index = index - 1) {
	var	newWord = newWord + word[index]
	}
    return newWord
}

reverse('skoob')



/**
 * Part 4
 *
 * write a function the returns a fizzbuzz string for an input number. 
 A fizzbuzz string is defined as the following:
 For every number from 1 to the input number...
 * - if that number isn't a multiple of 3 or 5, add a period "." to the fizzbuzz string
 * - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
 * - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
 * - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
 For example, the fizzbuzz string for the number 3 is "..fizz"
 For the number 15, the fizzbuzz string is "..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz"
 */

 var fizzbuzz = function(number){
    var completeResult = ''
 	for(var index = 1; index <= number; index = index + 1){
 		
 		if (index % 3 === 0 && index % 5 === 0) {
 			completeResult = completeResult + ("fizzbuzz")
 		}
 		else if(index % 3 === 0 && index % 5 !== 0) {
 			completeResult = completeResult + ("fizz")
 		}
 		else if(index % 5 === 0 && index % 3 !== 0) {
 			completeResult = completeResult + ("buzz")
 		}
 		else {
 			completeResult = completeResult + (".")
 		}
 	}
 	return completeResult
 }



/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

 	
 var findLongestWord = function(string) {
 	var splitWords = string.split(' ')
 	var longestWord = ''

 	for (var index = 0; index < splitWords.length; index = index + 1) {
 		var currentWord = splitWords[index]
 		if (currentWord.length > longestWord.length) {
 			longestWord = currentWord
 		}

 	}
 	return longestWord
}
 findLongestWord("a book full of dogs")


/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

 var GCD = function(num1,num2){
 	while(num2 !== 0) {
 		if (num1 > num2){
 			num1 = num1 - num2
 		}	
 			else {
 			num2 = num2 - num1
 			}
 	}
 		return num1

 }
 GCD(20,4)


console.log('********************************************************************************************************************************************')
console.log('')
console.log('Test Results Below')
console.log('__________________')

var chai = require('chai'),
	expect = chai.expect
	should = chai.should
	assert = chai.assert

function checkFuncBasics(name,argNum) {
	try {
		var func = eval(name)
	}
	catch(e) {
		assert.equal(undefined,name,'Make sure your function is called ' + name + ', case-sensitive.')
	}
	if (argNum) assert.equal(func.length,argNum,'Your function should take ' + argNum + ' argument(s) (that means inputs). Does it?')
}

describe('sumOfArray()', function(){
	it('should calculate sum of all numbers in an array', function(){
		checkFuncBasics('sumOfArray',1)
		assert.equal(3, sumOfArray([1, 2]))
		assert.equal(0, sumOfArray([]))
		assert.equal(6, sumOfArray([1, 2, 3]))
		assert.equal(27, sumOfArray([10, 9, 8]))
	})
})
describe('maxOfArray()', function(){
	it('should output a number if the array is not empty, else null', function() {
		checkFuncBasics('maxOfArray',1)
		expect(maxOfArray([5,10,2])).to.be.a('number')
		expect(maxOfArray([])).to.be.null
	})
	it('should return the highest number of an array', function(){
		checkFuncBasics('maxOfArray',1)
		assert.equal(4, maxOfArray([2, 4, 3]))
		assert.equal(100, maxOfArray([10,9,8,100,7,6]))
	})
})
describe('isVowel()', function(){
	it('should return true if character is a vowel, otherwise false', function(){
		checkFuncBasics('isVowel',1)
		assert.equal(false, isVowel(0))
		assert.equal(false, isVowel("B"))
		assert.equal(false, isVowel("b"))
		assert.equal(true, isVowel("a"))
		assert.equal(true, isVowel("E"))
	})
})
describe('reverse()', function(){
	it('should return the reversal of an input string', function(){
		checkFuncBasics('reverse',1)
		assert.equal("skoob", reverse("books"))
		assert.equal("elbuort on tnaw t'nod ew", reverse("we don't want no trouble"))
	})
})
describe('fizzbuzz()', function(){
	it('should meet the standards listed in Part 4 instructions', function(){
		checkFuncBasics('fizzbuzz',1)
		assert.equal(".", fizzbuzz(1))
		assert.equal("..", fizzbuzz(2))
		assert.equal("..fizz", fizzbuzz(3))
		assert.equal("..fizz.buzz", fizzbuzz(5))
		assert.equal("..fizz.buzzfizz..fizzbuzz", fizzbuzz(10))
	})
})
describe('findLongestWord()', function(){
	it('should return the longest word in a string of words', function(){
		checkFuncBasics('findLongestWord',1)
		assert.equal("book", findLongestWord("a book full of dogs"))
		assert.equal("Texas", findLongestWord("don't mess with Texas"))
	})
})
describe('GCD()', function(){
	it('should find the Greatest Common Denominator of two numbers', function(){
		checkFuncBasics('GCD',2)
		assert.equal(1, GCD(5,1))
		assert.equal(3, GCD(15,3))
		assert.equal(5, GCD(15,5))
		assert.equal(10, GCD(50,20))
	})
})
